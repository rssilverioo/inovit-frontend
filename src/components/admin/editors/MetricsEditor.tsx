"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { IconSelect } from "@/components/admin/IconSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface MetricItem {
  icon: string;
  label: string;
  value: string;
  detail: string;
  trend: string;
  color: string;
  barWidth: string;
}

interface Props {
  initialData: Record<string, unknown>;
}

export function MetricsEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [items, setItems] = useState<MetricItem[]>(
    (initialData.items as MetricItem[]) || []
  );

  function addItem() {
    setItems([
      ...items,
      {
        icon: "TrendingUp",
        label: "",
        value: "",
        detail: "",
        trend: "",
        color: "#00D28C",
        barWidth: "",
      },
    ]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, key: keyof MetricItem, value: string) {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    setItems(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("metrics", {
        label,
        title,
        subtitle,
        items,
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
      title="Metricas"
      description="Secao de metricas e resultados"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Metricas"
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

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Itens de Metrica</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addItem}
            className="text-xs"
          >
            <Plus className="size-3 mr-1" />
            Adicionar
          </Button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative border border-black/[0.06] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#0A0A0A]/25">
                  <GripVertical className="size-4" />
                  <span className="text-xs font-medium">
                    Metrica {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(index)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 h-7 px-2"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>

              <IconSelect
                label="Icone"
                value={item.icon}
                onChange={(val) => updateItem(index, "icon", val)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Label
                  </Label>
                  <Input
                    value={item.label}
                    onChange={(e) =>
                      updateItem(index, "label", e.target.value)
                    }
                    placeholder="Ex: Taxa de entrega"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Valor
                  </Label>
                  <Input
                    value={item.value}
                    onChange={(e) =>
                      updateItem(index, "value", e.target.value)
                    }
                    placeholder="Ex: 99.8%"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Detalhe
                  </Label>
                  <Input
                    value={item.detail}
                    onChange={(e) =>
                      updateItem(index, "detail", e.target.value)
                    }
                    placeholder="Ex: nos ultimos 12 meses"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Tendencia
                  </Label>
                  <Input
                    value={item.trend}
                    onChange={(e) =>
                      updateItem(index, "trend", e.target.value)
                    }
                    placeholder="Ex: +2.5%"
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
                      value={item.color || "#000000"}
                      onChange={(e) =>
                        updateItem(index, "color", e.target.value)
                      }
                      className="w-8 h-8 rounded border border-black/[0.06] cursor-pointer"
                    />
                    <Input
                      value={item.color}
                      onChange={(e) =>
                        updateItem(index, "color", e.target.value)
                      }
                      placeholder="#00D28C"
                      className="text-sm font-mono"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Largura da Barra
                  </Label>
                  <Input
                    value={item.barWidth}
                    onChange={(e) =>
                      updateItem(index, "barWidth", e.target.value)
                    }
                    placeholder="Ex: 85%"
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionEditorLayout>
  );
}
