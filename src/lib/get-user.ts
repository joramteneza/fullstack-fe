import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IncomingMessage, ServerResponse } from "http";
import jwtDecode from "jwt-decode";
import { getServerSession } from "next-auth";
export const getUser = async (request: any) => {
  const res: ServerResponse<IncomingMessage> = new ServerResponse(request);
  const session: any = await getServerSession(request, res, authOptions);
  if (session) {
    const user = jwtDecode(session.accessToken) as any;
    return {
      ...user,
      accessToken: session.accessToken,
    };
  }
  return null;
};
