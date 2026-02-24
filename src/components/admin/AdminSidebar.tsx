"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions/auth";
import Image from "next/image";
import {
  LayoutDashboard,
  Sparkles,
  Briefcase,
  GitBranch,
  FolderOpen,
  Shield,
  Cpu,
  BarChart3,
  Users,
  Megaphone,
  FileText,
  Building2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Hero", href: "/admin/content/hero", icon: Sparkles },
  { label: "Serviços", href: "/admin/content/services", icon: Briefcase },
  { label: "Processo", href: "/admin/content/process", icon: GitBranch },
  { label: "Cases", href: "/admin/content/cases", icon: FolderOpen },
  { label: "Diferenciais", href: "/admin/content/differentials", icon: Shield },
  { label: "Tech Stack", href: "/admin/content/tech-stack", icon: Cpu },
  { label: "Métricas", href: "/admin/content/metrics", icon: BarChart3 },
  { label: "Sobre", href: "/admin/content/about", icon: Users },
  { label: "CTA", href: "/admin/content/cta", icon: Megaphone },
  { label: "Footer", href: "/admin/content/footer", icon: FileText },
  { label: "Logo Cloud", href: "/admin/content/logo-cloud", icon: Building2 },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleLogout() {
    await logoutAction();
    window.location.href = "/admin/login";
  }

  const nav = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-black/[0.06]">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Inovit" width={100} height={28} className="dark:invert" />
          <span className="text-[10px] font-medium text-[#0A0A0A]/30 bg-[#0A0A0A]/[0.04] px-1.5 py-0.5 rounded">
            ADMIN
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#00D28C]/10 text-[#00D28C]"
                  : "text-[#0A0A0A]/50 hover:text-[#0A0A0A]/70 hover:bg-[#0A0A0A]/[0.03]"
              }`}
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-black/[0.06]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#0A0A0A]/40 hover:text-red-600 hover:bg-red-50 transition-colors w-full"
        >
          <LogOut className="size-4" />
          Sair
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-black/[0.06] z-40 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}
