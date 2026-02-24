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

interface DifferentialItem {
  icon: string;
  number: string;
  title: string;
  description: string;
}

interface Props {
  initialData: Record<string, unknown>;
}

export function DifferentialsEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [items, setItems] = useState<DifferentialItem[]>(
    (initialData.items as DifferentialItem[]) || []
  );

  function addItem() {
    setItems([
      ...items,
      { icon: "Zap", number: "", title: "", description: "" },
    ]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(
    index: number,
    key: keyof DifferentialItem,
    value: string
  ) {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    setItems(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("differentials", {
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
      title="Diferenciais"
      description="Secao de diferenciais da empresa"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Diferenciais"
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
          <Label className="text-sm font-semibold">Itens</Label>
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
                  <span className="text-xs font-medium">Item {index + 1}</span>
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
                    Numero
                  </Label>
                  <Input
                    value={item.number}
                    onChange={(e) =>
                      updateItem(index, "number", e.target.value)
                    }
                    placeholder="Ex: 01"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Titulo
                  </Label>
                  <Input
                    value={item.title}
                    onChange={(e) =>
                      updateItem(index, "title", e.target.value)
                    }
                    placeholder="Nome do diferencial"
                    className="text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Descricao
                  </Label>
                  <Textarea
                    value={item.description}
                    onChange={(e) =>
                      updateItem(index, "description", e.target.value)
                    }
                    placeholder="Descricao do diferencial"
                    rows={2}
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
