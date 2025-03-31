"use client";

import { addPost } from "@/lib/actions";
import { useState } from "react";
import { CustomAlert } from "./Alert";
import { Button } from "./ui/button";

export default function BlogForm() {
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState("");

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

    formData.append("content", content);

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
            className="backdrop-brightness-95 outline mx-1"
          />
          <button type="submit">Submit</button>
        </form>
        {error && <CustomAlert message={error} />}
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        required
        autoFocus
        className="text-7xl font-bold text-center focus:placeholder-transparent backdrop-brightness-99 mx-1 w-full outline-none"
      />

      <textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your content here"
        required
        className="w-full min-h-screen pb-16 outline-none resize-none overflow-hidden bg-gray-100 text-lg p-4"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
