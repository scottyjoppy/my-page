"use client";

import { addPost } from "@/lib/actions";
import { useState } from "react";
import { CustomAlert } from "./Alert";

export default function BlogForm() {
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === correctPassword) {
      setAuth(true);
      setError("");
    } else {
      setError("Incorrect Password");
      setPassword("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    await addPost(formData);

    setLoading(false);
    window.location.reload();
  }

  if (!auth) {
    return (
      <>
        <form onSubmit={handlePasswordSubmit}>
          <label>Enter Admin Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>
        {error && <CustomAlert message={error} />}
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required autoFocus />
      <textarea name="content" placeholder="Content" required />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
