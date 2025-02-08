import { useState } from "react";
import { createRepo } from "./api";

function App() {
  const [workspace, setWorkspace] = useState("");
  const [repoSlug, setRepoSlug] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createRepo(workspace, repoSlug);
      setMessage(result.message || "Repository created successfully!");
    } catch (error) {
      setMessage("Error creating repository");
    }
  };

  return (
    <div>
      <h1>Bitbucket Repo Provisioning</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Workspace"
          value={workspace}
          onChange={(e) => setWorkspace(e.target.value)}
        />
        <input
          placeholder="Repo Name"
          value={repoSlug}
          onChange={(e) => setRepoSlug(e.target.value)}
        />
        <button type="submit">Create Repo</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
