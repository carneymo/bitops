import requests
from fastapi import APIRouter, HTTPException
from app.vault import get_bitbucket_credentials

router = APIRouter()

BITBUCKET_API_BASE = "https://api.bitbucket.org/2.0"

@router.post("/create-repo/")
def create_repo(workspace: str, repo_slug: str):
    credentials = get_bitbucket_credentials()
    headers = {"Authorization": f"Bearer {credentials['token']}"}

    response = requests.post(
        f"{BITBUCKET_API_BASE}/repositories/{workspace}/{repo_slug}",
        headers=headers,
        json={"scm": "git", "is_private": True}
    )

    if response.status_code != 200:
        raise HTTPException(status_code=400, detail=response.json())

    return {"message": "Repository created successfully", "repo": response.json()}
