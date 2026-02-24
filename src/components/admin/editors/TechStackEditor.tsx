"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { StringArrayEditor } from "@/components/admin/StringArrayEditor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Props {
  initialData: Record<string, unknown>;
}

export function TechStackEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [techRow1, setTechRow1] = useState<string[]>(
    (initialData.techRow1 as string[]) || []
  );
  const [techRow2, setTechRow2] = useState<string[]>(
    (initialData.techRow2 as string[]) || []
  );

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("tech-stack", {
        label,
        title,
        subtitle,
        techRow1,
        techRow2,
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
      title="Tech Stack"
      description="Secao de tecnologias utilizadas"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Tecnologias"
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Titulo</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo da secao"
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Subtitulo</Label>
          <Textarea
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtitulo da secao"
            rows={3}
            className="mt-1"
          />
        </div>
      </div>

      <Separator />

      <StringArrayEditor
        label="Linha de Tecnologias 1"
        items={techRow1}
        onChange={setTechRow1}
        placeholder="Nome da tecnologia"
      />

      <Separator />

      <StringArrayEditor
        label="Linha de Tecnologias 2"
        items={techRow2}
        onChange={setTechRow2}
        placeholder="Nome da tecnologia"
      />
    </SectionEditorLayout>
  );
}
