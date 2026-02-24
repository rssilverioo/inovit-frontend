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

interface StepItem {
  icon: string;
  number: string;
  title: string;
  description: string;
  color: string;
}

interface Props {
  initialData: Record<string, unknown>;
}

export function ProcessEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [label, setLabel] = useState((initialData.label as string) || "");
  const [title, setTitle] = useState((initialData.title as string) || "");
  const [subtitle, setSubtitle] = useState(
    (initialData.subtitle as string) || ""
  );
  const [steps, setSteps] = useState<StepItem[]>(
    (initialData.steps as StepItem[]) || []
  );

  function addStep() {
    setSteps([
      ...steps,
      { icon: "Rocket", number: "", title: "", description: "", color: "#00D28C" },
    ]);
  }

  function removeStep(index: number) {
    setSteps(steps.filter((_, i) => i !== index));
  }

  function updateStep(index: number, key: keyof StepItem, value: string) {
    const updated = [...steps];
    updated[index] = { ...updated[index], [key]: value };
    setSteps(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("process", {
        label,
        title,
        subtitle,
        steps,
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
      title="Processo"
      description="Secao de etapas do processo"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Label</Label>
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex: Processo"
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
          <Label className="text-sm font-semibold">Etapas</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addStep}
            className="text-xs"
          >
            <Plus className="size-3 mr-1" />
            Adicionar
          </Button>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border border-black/[0.06] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#0A0A0A]/25">
                  <GripVertical className="size-4" />
                  <span className="text-xs font-medium">
                    Etapa {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeStep(index)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 h-7 px-2"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>

              <IconSelect
                label="Icone"
                value={step.icon}
                onChange={(val) => updateStep(index, "icon", val)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Numero
                  </Label>
                  <Input
                    value={step.number}
                    onChange={(e) =>
                      updateStep(index, "number", e.target.value)
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
                    value={step.title}
                    onChange={(e) =>
                      updateStep(index, "title", e.target.value)
                    }
                    placeholder="Nome da etapa"
                    className="text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Descricao
                  </Label>
                  <Textarea
                    value={step.description}
                    onChange={(e) =>
                      updateStep(index, "description", e.target.value)
                    }
                    placeholder="Descricao da etapa"
                    rows={2}
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
                      value={step.color || "#000000"}
                      onChange={(e) =>
                        updateStep(index, "color", e.target.value)
                      }
                      className="w-8 h-8 rounded border border-black/[0.06] cursor-pointer"
                    />
                    <Input
                      value={step.color}
                      onChange={(e) =>
                        updateStep(index, "color", e.target.value)
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
