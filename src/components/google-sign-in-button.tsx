"use client";

import { signIn } from "next-auth/react";

const GoogleSignInButton = () => {
  const handleClick = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div>
      <button
        className="
          border-2 border-blue-500 text-blue-500
          py-2 px-4 rounded-md
          hover:bg-blue-500 hover:text-white transition-colors
        "
        onClick={handleClick}
        type="button"
      >
        Login With Google
      </button>
    </div>
  );
};

export { GoogleSignInButton };
