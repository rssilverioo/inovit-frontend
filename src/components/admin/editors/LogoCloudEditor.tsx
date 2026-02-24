"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { StringArrayEditor } from "@/components/admin/StringArrayEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Props {
  initialData: Record<string, unknown>;
}

export function LogoCloudEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [logos, setLogos] = useState<string[]>(
    (initialData.logos as string[]) || []
  );

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("logo-cloud", {
        title,
        logos,
      });
      toast.success("Conteudo salvo com sucesso!");
    } catch {
      toast.error("Erro ao salvar conteudo");
    } finally {
      setSaving(false);
    }
  }

  return (
    <SectionEditorLayout
      title="Logo Cloud"
      description="Secao de logos de parceiros e clientes"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Titulo</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo da secao"
            className="mt-1"
          />
        </div>
      </div>

      <Separator />

      <StringArrayEditor
        label="Logos"
        items={logos}
        onChange={setLogos}
        placeholder="Nome ou URL do logo"
      />
    </SectionEditorLayout>
  );
}
