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

interface CaseItem {
  client: string;
  description: string;
  technologies: string[];
  category: string;
  gradient: string;
  iconColor: string;
}

interface CaseItemEditing {
  client: string;
  description: string;
  technologies: string;
  category: string;
  gradient: string;
  iconColor: string;
}

function toEditing(item: CaseItem): CaseItemEditing {
  return {
    ...item,
    technologies: Array.isArray(item.technologies)
      ? item.technologies.join(", ")
      : (item.technologies as string) || "",
  };
}

function fromEditing(item: CaseItemEditing): CaseItem {
  return {
    ...item,
    technologies: item.technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
  };
}

interface Props {
  initialData: Record<string, unknown>;
}

export function CasesEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [items, setItems] = useState<CaseItemEditing[]>(
    ((initialData.items as CaseItem[]) || []).map(toEditing)
  );

  function addItem() {
    setItems([
      ...items,
      {
        client: "",
        description: "",
        technologies: "",
        category: "",
        gradient: "",
        iconColor: "",
      },
    ]);
  }

  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  function updateItem(
    index: number,
    key: keyof CaseItemEditing,
    value: string
  ) {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    setItems(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("cases", {
        label,
        title,
        subtitle,
        items: items.map(fromEditing),
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
      title="Cases"
      description="Secao de casos de sucesso"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Cases"
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
          <Label className="text-sm font-semibold">Cases</Label>
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
                  <span className="text-xs font-medium">Case {index + 1}</span>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Cliente
                  </Label>
                  <Input
                    value={item.client}
                    onChange={(e) =>
                      updateItem(index, "client", e.target.value)
                    }
                    placeholder="Nome do cliente"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Categoria
                  </Label>
                  <Input
                    value={item.category}
                    onChange={(e) =>
                      updateItem(index, "category", e.target.value)
                    }
                    placeholder="Ex: E-commerce"
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
                    placeholder="Descricao do case"
                    rows={2}
                    className="text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Tecnologias (separadas por virgula)
                  </Label>
                  <Input
                    value={item.technologies}
                    onChange={(e) =>
                      updateItem(index, "technologies", e.target.value)
                    }
                    placeholder="React, Next.js, TypeScript"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Gradiente
                  </Label>
                  <Input
                    value={item.gradient}
                    onChange={(e) =>
                      updateItem(index, "gradient", e.target.value)
                    }
                    placeholder="Ex: from-emerald-500 to-cyan-500"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Cor do Icone
                  </Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={item.iconColor || "#000000"}
                      onChange={(e) =>
                        updateItem(index, "iconColor", e.target.value)
                      }
                      className="w-8 h-8 rounded border border-black/[0.06] cursor-pointer"
                    />
                    <Input
                      value={item.iconColor}
                      onChange={(e) =>
                        updateItem(index, "iconColor", e.target.value)
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
