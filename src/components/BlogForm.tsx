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

    const contentDiv = document.querySelector(
      '[data-name="content"]'
    ) as HTMLElement;
    if (contentDiv) {
      formData.append("content", contentDiv.innerText);
    }

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
      <div
        data-name="content"
        contentEditable="true"
        className="w-full min-h-screen pb-16 outline-none resize-none overflow-hidden bg-gray-100 text-lg p-4 required"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      ></div>

      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
