"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface StatItem {
  number: string;
  label: string;
  color: string;
}

interface Props {
  initialData: Record<string, unknown>;
}

export function AboutEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [paragraph1, setParagraph1] = useState(
    (initialData.paragraph1 as string) || ""
  );
  const [paragraph2, setParagraph2] = useState(
    (initialData.paragraph2 as string) || ""
  );
  const [quote, setQuote] = useState((initialData.quote as string) || "");
  const [stats, setStats] = useState<StatItem[]>(
    (initialData.stats as StatItem[]) || []
  );

  function addStat() {
    setStats([...stats, { number: "", label: "", color: "#00D28C" }]);
  }

  function removeStat(index: number) {
    setStats(stats.filter((_, i) => i !== index));
  }

  function updateStat(index: number, key: keyof StatItem, value: string) {
    const updated = [...stats];
    updated[index] = { ...updated[index], [key]: value };
    setStats(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("about", {
        label,
        title,
        paragraph1,
        paragraph2,
        quote,
        stats,
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
      title="Sobre"
      description="Secao sobre a empresa"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Sobre nos"
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
          <Label className="text-sm font-semibold">Paragrafo 1</Label>
          <Textarea
            value={paragraph1}
            onChange={(e) => setParagraph1(e.target.value)}
            placeholder="Primeiro paragrafo"
            rows={4}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Paragrafo 2</Label>
          <Textarea
            value={paragraph2}
            onChange={(e) => setParagraph2(e.target.value)}
            placeholder="Segundo paragrafo"
            rows={4}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">Citacao</Label>
          <Textarea
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Citacao em destaque"
            rows={3}
            className="mt-1"
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Estatisticas</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addStat}
            className="text-xs"
          >
            <Plus className="size-3 mr-1" />
            Adicionar
          </Button>
        </div>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative border border-black/[0.06] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#0A0A0A]/25">
                  <GripVertical className="size-4" />
                  <span className="text-xs font-medium">
                    Estatistica {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeStat(index)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 h-7 px-2"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Numero
                  </Label>
                  <Input
                    value={stat.number}
                    onChange={(e) =>
                      updateStat(index, "number", e.target.value)
                    }
                    placeholder="Ex: +150"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Label
                  </Label>
                  <Input
                    value={stat.label}
                    onChange={(e) =>
                      updateStat(index, "label", e.target.value)
                    }
                    placeholder="Ex: Projetos"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Cor
                  </Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={stat.color || "#000000"}
                      onChange={(e) =>
                        updateStat(index, "color", e.target.value)
                      }
                      className="w-8 h-8 rounded border border-black/[0.06] cursor-pointer"
                    />
                    <Input
                      value={stat.color}
                      onChange={(e) =>
                        updateStat(index, "color", e.target.value)
                      }
                      placeholder="#00D28C"
                      className="text-sm font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionEditorLayout>
  );
}
