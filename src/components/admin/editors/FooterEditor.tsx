"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSectionContent } from "@/lib/actions/content";
import { SectionEditorLayout } from "@/components/admin/SectionEditorLayout";
import { ArrayFieldEditor } from "@/components/admin/ArrayFieldEditor";
import { IconSelect } from "@/components/admin/IconSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface LinkItem {
  label: string;
  href: string;
}

interface Props {
  initialData: Record<string, unknown>;
}

export function FooterEditor({ initialData }: Props) {
  const [saving, setSaving] = useState(false);
  const [brandDescription, setBrandDescription] = useState(
    (initialData.brandDescription as string) || ""
  );
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(
    (initialData.socialLinks as SocialLink[]) || []
  );
  const [institucional, setInstitucional] = useState<LinkItem[]>(
    (initialData.institucional as LinkItem[]) || []
  );
  const [servicos, setServicos] = useState<LinkItem[]>(
    (initialData.servicos as LinkItem[]) || []
  );
  const [contato, setContato] = useState<LinkItem[]>(
    (initialData.contato as LinkItem[]) || []
  );
  const [cnpj, setCnpj] = useState((initialData.cnpj as string) || "");

  function addSocialLink() {
    setSocialLinks([
      ...socialLinks,
      { icon: "Globe", href: "", label: "" },
    ]);
  }

  function removeSocialLink(index: number) {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  }

  function updateSocialLink(
    index: number,
    key: keyof SocialLink,
    value: string
  ) {
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [key]: value };
    setSocialLinks(updated);
  }

  async function handleSave() {
    setSaving(true);
    try {
      await updateSectionContent("footer", {
        brandDescription,
        socialLinks,
        institucional,
        servicos,
        contato,
        cnpj,
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
      title="Footer"
      description="Rodape do site"
      onSave={handleSave}
      saving={saving}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Descricao da Marca</Label>
          <Textarea
            value={brandDescription}
            onChange={(e) => setBrandDescription(e.target.value)}
            placeholder="Descricao exibida no rodape"
            rows={3}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-semibold">CNPJ</Label>
          <Input
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="00.000.000/0000-00"
            className="mt-1"
          />
        </div>
      </div>

      <Separator />

      {/* Social Links - custom because of IconSelect */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Redes Sociais</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addSocialLink}
            className="text-xs"
          >
            <Plus className="size-3 mr-1" />
            Adicionar
          </Button>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="relative border border-black/[0.06] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#0A0A0A]/25">
                  <GripVertical className="size-4" />
                  <span className="text-xs font-medium">
                    Rede Social {index + 1}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSocialLink(index)}
                  className="text-red-400 hover:text-red-600 hover:bg-red-50 h-7 px-2"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>

              <IconSelect
                label="Icone"
                value={link.icon}
                onChange={(val) => updateSocialLink(index, "icon", val)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    Label
                  </Label>
                  <Input
                    value={link.label}
                    onChange={(e) =>
                      updateSocialLink(index, "label", e.target.value)
                    }
                    placeholder="Ex: LinkedIn"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    URL
                  </Label>
                  <Input
                    value={link.href}
                    onChange={(e) =>
                      updateSocialLink(index, "href", e.target.value)
                    }
                    placeholder="https://..."
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <ArrayFieldEditor
        label="Institucional"
        items={institucional as unknown as Record<string, unknown>[]}
        onChange={(items) => setInstitucional(items as unknown as LinkItem[])}
        defaultItem={{ label: "", href: "" }}
        fields={[
          { key: "label", label: "Label", placeholder: "Ex: Sobre nos" },
          { key: "href", label: "URL", placeholder: "#about" },
        ]}
      />

      <Separator />

      <ArrayFieldEditor
        label="Servicos"
        items={servicos as unknown as Record<string, unknown>[]}
        onChange={(items) => setServicos(items as unknown as LinkItem[])}
        defaultItem={{ label: "", href: "" }}
        fields={[
          { key: "label", label: "Label", placeholder: "Ex: Desenvolvimento Web" },
          { key: "href", label: "URL", placeholder: "#services" },
        ]}
      />

      <Separator />

      <ArrayFieldEditor
        label="Contato"
        items={contato as unknown as Record<string, unknown>[]}
        onChange={(items) => setContato(items as unknown as LinkItem[])}
        defaultItem={{ label: "", href: "" }}
        fields={[
          { key: "label", label: "Label", placeholder: "Ex: contato@empresa.com" },
          { key: "href", label: "URL", placeholder: "mailto:contato@empresa.com" },
        ]}
      />
    </SectionEditorLayout>
  );
}
