import type { NextAuthConfig } from "next-auth";

/**
 * Auth config shared between middleware (edge) and full server auth.
 * This file must NOT import Node.js-only modules (bcryptjs, prisma, pg).
 */
export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    authorized({ auth, request }) {
      const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
      const isLoginPage = request.nextUrl.pathname === "/admin/login";
      const isAuthenticated = !!auth;

      if (isAdminRoute && !isLoginPage && !isAuthenticated) {
        return false; // will redirect to signIn page
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
