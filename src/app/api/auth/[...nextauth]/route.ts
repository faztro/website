import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          console.log(data, "response");

          if (data.success) {
            return {
              id: data.data.id,
              email: data.data.email,
              name: data.data.name,
              accessToken: data.data.token,
            };
          }
          return null;
        } catch (error) {
          console.error("Auth Error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.table({ token, user: JSON.stringify(user), type: "token" });
      if (user) {
        // Copy user properties to token
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      console.table({ session, token, type: "session" });
      if (session.user) {
        // Copy token properties to session.user
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
