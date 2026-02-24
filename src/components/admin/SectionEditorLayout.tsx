"use client";

import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SaveButton } from "./SaveButton";

interface SectionEditorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  onSave: () => Promise<void>;
  saving: boolean;
}

export function SectionEditorLayout({
  title,
  description,
  children,
  onSave,
  saving,
}: SectionEditorLayoutProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="w-8 h-8 rounded-lg border border-black/[0.06] flex items-center justify-center text-[#0A0A0A]/30 hover:text-[#0A0A0A]/60 hover:border-black/10 transition-colors"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[#0A0A0A] tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-[#0A0A0A]/40">{description}</p>
          </div>
        </div>
        <SaveButton onClick={onSave} saving={saving} />
      </div>

      {/* Content */}
      <div className="admin-form bg-white rounded-xl border border-black/[0.06] p-6 lg:p-8 space-y-6">
        {children}
      </div>
    </div>
  );
}
