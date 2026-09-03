import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import requests


LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql"

SESSION_TOKEN = os.getenv("LEETCODE_SESSION")
CSRF_TOKEN = os.getenv("LEETCODE_CSRF_TOKEN")

SOLUTIONS_DIR = Path("solutions")

LANGUAGE_EXTENSIONS = {
    "python": "py",
    "python3": "py",
    "pythondata": "py",
    "javascript": "js",
    "typescript": "ts",
    "java": "java",
    "cpp": "cpp",
    "c": "c",
    "csharp": "cs",
    "c++": "cpp",
    "go": "go",
    "golang": "go",
    "rust": "rs",
    "kotlin": "kt",
    "swift": "swift",
    "php": "php",
    "ruby": "rb",
    "scala": "scala",
    "dart": "dart",
    "mysql": "sql",
    "mssql": "sql",
    "oraclesql": "sql",
    "postgresql": "sql",
    "bash": "sh",
    "shell": "sh",
}


def fail(message):
    print(f"ERROR: {message}")
    sys.exit(1)


if not SESSION_TOKEN:
    fail("LEETCODE_SESSION secret is missing.")

if not CSRF_TOKEN:
    fail("LEETCODE_CSRF_TOKEN secret is missing.")


session = requests.Session()

session.cookies.set(
    "LEETCODE_SESSION",
    SESSION_TOKEN,
    domain=".leetcode.com",
)

session.cookies.set(
    "csrftoken",
    CSRF_TOKEN,
    domain=".leetcode.com",
)

session.headers.update(
    {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com/",
        "Origin": "https://leetcode.com",
        "x-csrftoken": CSRF_TOKEN,
        "User-Agent": (
            "Mozilla/5.0 "
            "(Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 "
            "(KHTML, like Gecko) "
            "Chrome/139.0 Safari/537.36"
        ),
    }
)


def graphql(query, variables=None):
    try:
        response = session.post(
            LEETCODE_GRAPHQL_URL,
            json={
                "query": query,
                "variables": variables or {},
            },
            timeout=30,
        )
    except requests.RequestException as exc:
        fail(f"Could not connect to LeetCode: {exc}")

    if response.status_code != 200:
        fail(
            f"LeetCode returned HTTP {response.status_code}: "
            f"{response.text[:500]}"
        )

    try:
        data = response.json()
    except ValueError:
        fail("LeetCode returned invalid JSON.")

    if data.get("errors"):
        errors = data["errors"]
        messages = []

        for error in errors:
            if isinstance(error, dict):
                messages.append(str(error.get("message", error)))
            else:
                messages.append(str(error))

        fail("LeetCode GraphQL error: " + " | ".join(messages))

    return data.get("data", {})


def get_user():
    query = """
    query {
        userStatus {
            isSignedIn
            username
        }
    }
    """

    data = graphql(query)
    user_status = data.get("userStatus")

    if not user_status:
        fail("Could not read LeetCode user status.")

    if not user_status.get("isSignedIn"):
        fail(
            "LeetCode session is not authenticated. "
            "Check LEETCODE_SESSION and LEETCODE_CSRF_TOKEN."
        )

    username = user_status.get("username")

    if not username:
        fail("LeetCode username could not be determined.")

    return username


def get_recent_accepted_submissions(username):
    query = """
    query recentAcSubmissionList($username: String!, $limit: Int!) {
        recentAcSubmissionList(
            username: $username
            limit: $limit
        ) {
            id
            title
            titleSlug
            timestamp
        }
    }
    """

    data = graphql(
        query,
        {
            "username": username,
            "limit": 50,
        },
    )

    submissions = data.get("recentAcSubmissionList")

    if submissions is None:
        return []

    if not isinstance(submissions, list):
        fail("Unexpected response from recentAcSubmissionList.")

    return submissions


def get_submission_details(submission_id):
    query = """
    query submissionDetails($submissionId: Int!) {
        submissionDetails(submissionId: $submissionId) {
            code
            lang
            runtime
            memory
            statusDisplay
            timestamp
            question {
                questionFrontendId
                title
                titleSlug
                difficulty
            }
        }
    }
    """

    data = graphql(
        query,
        {
            "submissionId": int(submission_id),
        },
    )

    return data.get("submissionDetails")


def sanitize_filename(value):
    value = value.lower().strip()

    value = re.sub(r"[^a-z0-9]+", "-", value)

    value = re.sub(r"-+", "-", value)

    return value.strip("-")


def get_extension(language):
    normalized = language.lower().strip()

    return LANGUAGE_EXTENSIONS.get(normalized, "txt")


def format_timestamp(timestamp):
    try:
        timestamp_int = int(timestamp)

        date = datetime.fromtimestamp(
            timestamp_int,
            tz=timezone.utc,
        )

        return date.strftime("%Y-%m-%d %H:%M:%S UTC")

    except (TypeError, ValueError):
        return str(timestamp)


def solution_directory(question):
    question_id = question.get("questionFrontendId")
    title_slug = question.get("titleSlug")

    safe_slug = sanitize_filename(title_slug or "unknown-problem")

    if question_id:
        return SOLUTIONS_DIR / f"{question_id}-{safe_slug}"

    return SOLUTIONS_DIR / safe_slug


def write_solution(submission):
    submission_id = submission.get("id")

    if not submission_id:
        print("Skipping submission without ID.")
        return False

    details = get_submission_details(submission_id)

    if not details:
        print(
            f"Could not get details for submission {submission_id}. "
            "Skipping."
        )
        return False

    status = details.get("statusDisplay")

    if status != "Accepted":
        print(
            f"Submission {submission_id} status is "
            f"{status!r}. Skipping."
        )
        return False

    code = details.get("code")

    if not code:
        print(
            f"Submission {submission_id} has no code. "
            "Skipping."
        )
        return False

    question = details.get("question") or {}

    title = question.get("title") or submission.get("title") or "Unknown Problem"
    title_slug = (
        question.get("titleSlug")
        or submission.get("titleSlug")
        or "unknown-problem"
    )

    question_id = (
        question.get("questionFrontendId")
        or "unknown"
    )

    difficulty = question.get("difficulty") or "Unknown"

    language = details.get("lang") or "unknown"

    extension = get_extension(language)

    safe_slug = sanitize_filename(title_slug)

    if question_id != "unknown":
        directory = SOLUTIONS_DIR / f"{question_id}-{safe_slug}"
    else:
        directory = SOLUTIONS_DIR / safe_slug

    directory.mkdir(
        parents=True,
        exist_ok=True,
    )

    solution_file = directory / f"solution.{extension}"

    readme_file = directory / "README.md"

    # Don't overwrite an existing solution.
    if solution_file.exists():
        print(
            f"Already synced: {title} "
            f"(submission {submission_id})"
        )
        return False

    solution_file.write_text(
        code.rstrip() + "\n",
        encoding="utf-8",
    )

    timestamp = details.get("timestamp") or submission.get("timestamp")

    problem_url = (
        f"https://leetcode.com/problems/{title_slug}/"
    )

    readme = f"""# {question_id}. {title}

- **Difficulty:** {difficulty}
- **Language:** {language}
- **Submission ID:** {submission_id}
- **Submitted:** {format_timestamp(timestamp)}
- **LeetCode:** {problem_url}

## Solution

The accepted solution is available in `solution.{extension}`.
"""

    readme_file.write_text(
        readme,
        encoding="utf-8",
    )

    print(f"Synced: {title}")
    print(f"  Submission: {submission_id}")
    print(f"  Language: {language}")
    print(f"  File: {solution_file}")

    return True


def main():
    print("Starting LeetCode sync...")

    username = get_user()

    print(f"Authenticated as: {username}")

    submissions = get_recent_accepted_submissions(username)

    if not submissions:
        print("No recent accepted submissions found.")
        return

    print(
        f"Found {len(submissions)} recent accepted submission(s)."
    )

    synced_count = 0

    for submission in submissions:
        try:
            if write_solution(submission):
                synced_count += 1
        except Exception as exc:
            print(
                f"Failed to process submission "
                f"{submission.get('id')}: {exc}"
            )

    print()
    print(f"Sync complete. New solutions: {synced_count}")


if __name__ == "__main__":
    main()
