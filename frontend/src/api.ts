const API_BASE = "http://backend:8000";  // Use "backend" instead of "localhost"

export const createRepo = async (workspace: string, repoSlug: string) => {
  const response = await fetch(`${API_BASE}/create-repo/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ workspace, repo_slug: repoSlug }),
  });

  if (!response.ok) {
    throw new Error("Failed to create repository");
  }

  return response.json();
};
