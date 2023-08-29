"use client";
import React, { useState, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { Session } from "next-auth";
import Link from "next/link";
import { buildURL } from "@/helpers";
import { SignUpRequest } from "@/types/user.types";

interface IFormInput {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

const signUp = async (body: SignUpRequest) => {
  const url = buildURL("/api/auth/signup", {});

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const SignupPage: React.FC = () => {
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
      const result = await signUp({
        email: data.email,
        password: data.password,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
      } as SignUpRequest);
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
          <h1 className="text-xl font-semibold mb-4 text-center p-1">
            Sign Up
          </h1>
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
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              id="username"
              {...register("username", { required: "Username is required" })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              className="mt-1 p-2 w-full border rounded"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
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
            Sign Up
          </button>
          <Link href="/login" className="flex items-center justify-center">
            Already have an Account?
            <div className="text-blue-500 p-2 text-center hover:underline hover:text-blue-700">
              Sign In
            </div>
          </Link>
        </form>
      </div>
    </SessionProvider>
  );
};

export default SignupPage;
