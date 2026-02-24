"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { ArrayFieldEditor } from "@/components/admin/ArrayFieldEditor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Props {
  initialData: Record<string, unknown>;
}

export function HeroEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [badge, setBadge] = useState((initialData.badge as string) || "");
  const [headline, setHeadline] = useState(
    (initialData.headline as string) || ""
  );
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [ctaPrimary, setCtaPrimary] = useState(
    (initialData.ctaPrimary as string) || ""
  );
  const [ctaSecondary, setCtaSecondary] = useState(
    (initialData.ctaSecondary as string) || ""
  );
  const [metrics, setMetrics] = useState<Record<string, unknown>[]>(
    (initialData.metrics as Record<string, unknown>[]) || []
  );

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("hero", {
        badge,
        headline,
        subtitle,
        ctaPrimary,
        ctaSecondary,
        metrics,
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
      title="Hero"
      description="Secao principal do site"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Badge</Label>
          <Input
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            placeholder="Ex: Desenvolvimento de Software"
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Headline</Label>
          <Input
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Titulo principal"
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Subtitle</Label>
          <Textarea
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtitulo do hero"
            rows={3}
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-semibold">CTA Primario</Label>
            <Input
              value={ctaPrimary}
              onChange={(e) => setCtaPrimary(e.target.value)}
              placeholder="Texto do botao primario"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm font-semibold">CTA Secundario</Label>
            <Input
              value={ctaSecondary}
              onChange={(e) => setCtaSecondary(e.target.value)}
              placeholder="Texto do botao secundario"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <Separator />

      <ArrayFieldEditor
        label="Metricas"
        items={metrics}
        onChange={setMetrics}
        defaultItem={{ value: "", label: "" }}
        fields={[
          { key: "value", label: "Valor", placeholder: "Ex: +150" },
          { key: "label", label: "Label", placeholder: "Ex: Projetos entregues" },
        ]}
      />
    </SectionEditorLayout>
  );
}
