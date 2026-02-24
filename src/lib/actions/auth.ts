"use server";

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    // NextAuth may throw a NEXT_REDIRECT on success — let it propagate
    if (isRedirectError(error)) {
      throw error;
    }
    if (error instanceof AuthError) {
      return { success: false, error: "Credenciais inválidas" };
    }
    return { success: false, error: "Erro ao fazer login" };
  }
}

export async function logoutAction() {
  await signOut({ redirect: false });
}
