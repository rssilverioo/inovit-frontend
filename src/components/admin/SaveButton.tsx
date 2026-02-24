"use client";

import { Button } from "@/components/ui/button";
import { Save, Loader2 } from "lucide-react";

interface SaveButtonProps {
  onClick: () => Promise<void>;
  saving: boolean;
}

export function SaveButton({ onClick, saving }: SaveButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={saving}
      className="bg-[#00D28C] text-black hover:bg-[#00E8A0] font-semibold"
    >
      {saving ? (
        <Loader2 className="size-4 mr-2 animate-spin" />
      ) : (
        <Save className="size-4 mr-2" />
      )}
      {saving ? "Salvando..." : "Salvar"}
    </Button>
  );
}
