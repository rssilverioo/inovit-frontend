"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  initialData: Record<string, unknown>;
}

export function CtaEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [ctaText, setCtaText] = useState(
    (initialData.ctaText as string) || ""
  );
  const [email, setEmail] = useState((initialData.email as string) || "");

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("cta", {
        label,
        title,
        subtitle,
        ctaText,
        email,
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
      title="CTA"
      description="Secao de chamada para acao"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Comece agora"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-semibold">Texto do CTA</Label>
            <Input
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              placeholder="Texto do botao"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-semibold">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contato@empresa.com"
              type="email"
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </SectionEditorLayout>
  );
}
