"use client";
import { userStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ForgetPass() {
  const { forgetPasswordCode, forgetPassword, message, user } = userStore();

  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState<number | "">("");
  const [newPassword, setNewPassword] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email first");

    setIsSending(true);
    try {
      const res = await forgetPasswordCode(email);
      if (res?.success) {
        setCodeSent(true);
      } else {
        alert(res?.message || "Failed to send code");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleForgetPass = async (e) => {
    e.preventDefault();

    if (!email || !verificationCode || !newPassword)
      return alert("Please fill all fields");

    try {
      setLoading(true);
      await forgetPassword(email, verificationCode, newPassword);
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 py-10">
      <div className="hidden md:flex w-1/2 justify-center">
        <img
          src="/images/loginPage.png"
          alt="Reset Password Illustration"
          className="w-3/4"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-rose-600">
          Forgot Password?
        </h1>
        
        <p className="text-center text-gray-600 mt-2 mb-8">
          Enter your email to reset your password
        </p>

        {message && (
          <div className="text-center text-sm text-rose-500 mb-4">
            {message}
          </div>
        )}

        <form onSubmit={handleForgetPass} className="space-y-6">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              disabled={!!user?.email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              onClick={handleSendCode}
              disabled={!email || isSending}
              className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Code"}
            </button>
          </div>

          {codeSent && (
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(Number(e.target.value))}
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
              />
              <input
                type="password"
                placeholder="Enter a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          )}
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => router.push(`${user ? "/" : "/auth/login"}`)}
            className="text-sm text-gray-600 hover:text-rose-600"
          >
            Back to {user ? "Home" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
