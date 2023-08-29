"use client";
import { Session, User } from "next-auth";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Avatar from "../commons/Avatar";

const Header: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  const handleLogout = async () => {
    await signOut();
    router.push("/login"); // Redirect to login page after logout
  };

  const navigateToProfile = async () => {
    router.push("/profile"); // Redirect to login page after logout
  };

  const navigateToHome = async () => {
    router.push("/"); // Redirect to login page after logout
  };

  const user: any =
    session.status === "authenticated" ? session.data.user : undefined;
  const name =
    user?.firstName?.charAt(0) + user?.lastName?.charAt(0) || undefined;

  return (
    <SessionProvider session={session.data as Session}>
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div
            onClick={navigateToHome}
            className="text-white text-lg font-semibold cursor-pointer"
          >
            Blog IT
          </div>
          <div className="flex items-center space-x-4">
            {session.status === "unauthenticated" || !name ? (
              <button
                onClick={handleLogout}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Login
              </button>
            ) : (
              name && (
                <>
                  <Avatar
                    onClick={navigateToProfile}
                    className="w-10 h-10 cursor-pointer"
                    name={name}
                  />
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )
            )}

            <div className="text-white cursor-pointer">
              {/* Add your menu icon here */}
            </div>
          </div>
        </div>
      </header>
    </SessionProvider>
  );
};

export default Header;
