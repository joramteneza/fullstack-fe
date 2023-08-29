import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { buildURL } from "@/helpers";
import { parseBody } from "@/helpers/bodyHelper";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const query = new URL(req.nextUrl.href).searchParams;

  try {
    const url = buildURL(`${process.env.MAIN_API_URL}/auth/signup`, query);
    const bodyText = await parseBody(req);

    const signupData = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyText),
    });

    const data = await signupData.json();

    return data;
  } catch (error) {
    throw new Error("Sign Up Failed", { cause: error });
  }
}
