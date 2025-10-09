"use client";
import { userStore } from "@/store/user.store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Signup() {
  const {
    sendSignupCode,
    verifyCode,
    signUp,
    message,
    resetMessage,
    user,
    profile,
  } = userStore();

  const [sendingCode, setSendingCode] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [verificationCode, setVerificationCode] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => resetMessage(), 3000);
      return () => clearTimeout(timer);
    }
  }, [message, resetMessage]);
  const handleSendCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.email) return;

    try {
      setSendingCode(true);
      const res = await sendSignupCode(formData.email);

      if (res?.success === false) {
        return;
      } else {
        return;
      }
    } catch (err) {
      alert("Something went wrong while sending code.");
    } finally {
      setSendingCode(false);
    }
  };
  const handleVerifyCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!verificationCode) return;

    setVerifying(true);
    const res = await verifyCode(formData.email, verificationCode);
    setVerifying(false);

    if (res?.success) {
      setVerified(true);
      return;
    } else {
      return;
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!verified) return alert("Verify your email first!");
    setLoading(true);
    await signUp(formData);
    setLoading(false);
  };

  const navigate = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      await profile();
    };
    fetchUser();
    user ? navigate.push("/") : null;
  }, [profile, user]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-10 p-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/loginPage.png"
          alt="Signup page"
          className="w-3/4 md:w-full max-w-md"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-md space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-gray-600 mt-2">Sign up to continue your journey</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="flex gap-2">
            <input
              className="flex-1 p-2 border rounded-md outline-none focus:ring focus:ring-rose-200"
              placeholder="Email Address"
              value={formData.email}
              name="email"
              disabled={verified || sendingCode}
              onChange={handleChange}
            />
            <button
              onClick={handleSendCode}
              disabled={sendingCode}
              className="bg-rose-600 text-white px-4 rounded-md hover:bg-rose-700"
            >
              {sendingCode ? "Sending..." : "Send Code"}
            </button>
          </div>

          {!verified && (
            <div className="flex gap-2">
              <input
                type="number"
                name="verificationCode"
                placeholder="Verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-1 p-2 border rounded-md outline-none focus:ring focus:ring-rose-200"
              />
              <button
                onClick={handleVerifyCode}
                disabled={verifying}
                className="bg-green-600 text-white px-4 rounded-md hover:bg-green-700"
              >
                {verifying ? "Verifying..." : "Verify"}
              </button>
            </div>
          )}

          {verified && (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 border rounded-md outline-none focus:ring focus:ring-rose-200"
              />
              <input
                className="w-full p-2 border rounded-md outline-none focus:ring focus:ring-rose-200"
                placeholder="Password"
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </>
          )}

          {message && (
            <div className="text-sm text-center text-rose-600 font-medium">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={!verified || loading}
            className={`w-full py-3 text-white bg-rose-600 rounded-md hover:bg-rose-700 disabled:opacity-50`}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-rose-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
