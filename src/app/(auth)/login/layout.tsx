import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Welcome to Blog IT!",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 h-screen overflow-y-scroll">{children}</div>;
}
