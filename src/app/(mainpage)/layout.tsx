"use client";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import HeaderContextProvider from "@/contexts/HeaderContext/HeaderContextProvider";
import { Session } from "next-auth";

function Layout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string>("");
  const session = useSession();

  if (!session) return null;

  return (
    <SessionProvider session={session.data as Session}>
      {children}
    </SessionProvider>
  );
}

export default Layout;
