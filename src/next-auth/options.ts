import GoogleProvider from "next-auth/providers/google";

import type { NextAuthOptions } from "next-auth";

const options: NextAuthOptions = {
  callbacks: {
    async signIn({ account, credentials, email, profile, user }) {
      console.log("account", account);
      console.log("credentials", credentials);
      console.log("email", email);
      console.log("profile", profile);
      console.log("user", user);

      return true;
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session: {
    strategy: "database"
  }
};

export { options };
