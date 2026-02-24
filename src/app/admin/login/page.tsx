"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginAction(email, password);
      if (result?.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(result?.error || "Erro ao fazer login");
      }
    } catch {
      setError("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Inovit Digital"
            width={140}
            height={36}
            className="mx-auto mb-6 dark:invert"
          />
          <h1 className="text-xl font-semibold text-[#0A0A0A] tracking-tight">
            Painel Admin
          </h1>
          <p className="text-sm text-[#0A0A0A]/40 mt-1">
            Entre com suas credenciais para acessar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0A0A0A]/70 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@inovitdigital.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white border-[#0A0A0A]/10 text-[#0A0A0A] placeholder:text-[#0A0A0A]/30 h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#0A0A0A]/70 font-medium">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white border-[#0A0A0A]/10 text-[#0A0A0A] placeholder:text-[#0A0A0A]/30 h-11"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00D28C] text-black hover:bg-[#00E8A0] font-semibold"
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
