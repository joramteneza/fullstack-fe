"use client";
import React, { useState, useEffect } from "react";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Session } from "next-auth";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.data) {
      router.push("/");
    }
  }, [session, router]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/login",
      });
      if (result?.error) {
        setErrorMessage(result.error);
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred");
    }
  };

  return (
    <SessionProvider session={session.data as Session}>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/3 bg-white p-4 rounded"
        >
          <h1 className="text-xl font-semibold mb-4 text-center p-1">Login</h1>

          {errorMessage && (
            <div className="text-red-500 mb-2">{errorMessage}</div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>

          <Link href="/signup" className="flex items-center justify-center">
            Don't have an account yet?
            <div className="text-blue-500 p-2 text-center hover:underline hover:text-blue-700">
              Sign Up
            </div>
          </Link>
        </form>
      </div>
    </SessionProvider>
  );
};

export default LoginPage;
