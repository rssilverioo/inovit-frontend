import { auth } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Toaster } from "@/components/ui/sonner";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  if (!isAuthenticated) {
    return (
      <div className="admin-form">
        {children}
        <Toaster richColors position="top-right" />
      </div>
    );
  }

  return (
    <div className="admin-form min-h-screen bg-[#F5F6F8]">
      <AdminSidebar />
      <main className="lg:pl-64">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
      <Toaster richColors position="top-right" />
    </div>
  );
}
