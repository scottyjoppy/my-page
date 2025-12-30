"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const supabase = createClient();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn() {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/test");
  }

  // async function signUp() {
  //   setLoading(true);
  //   setError(null);

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });

  //   setLoading(false);

  //   if (error) {
  //     setError(error.message);
  //     return;
  //   }

  //   alert("Check your email to confirm your account.");
  // }

  return (
    <>
      <section className="h-full flex flex-col justify-center items-center">
        <h1>Login</h1>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white px-3 py-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white px-3 py-2 rounded-lg"
          />
          {error && <p>{error}</p>}
          <button
            onClick={signIn}
            disabled={loading}
            className="hover:font-bold transition-all hover:cursor-pointer bg-orange-300 hover:bg-orange-400 rounded-xl"
          >
            Sign In
          </button>
        </div>
        {/* <button onClick={signUp} disabled={loading}>Sign Up</button> */}
      </section>
    </>
  );
}
