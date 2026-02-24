"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface FieldConfig {
  key: string;
  label: string;
  type?: "text" | "textarea" | "color";
  placeholder?: string;
}

interface ArrayFieldEditorProps<T extends Record<string, unknown>> {
  label: string;
  items: T[];
  fields: FieldConfig[];
  onChange: (items: T[]) => void;
  defaultItem: T;
}

export function ArrayFieldEditor<T extends Record<string, unknown>>({
  label,
  items,
  fields,
  onChange,
  defaultItem,
}: ArrayFieldEditorProps<T>) {
  function addItem() {
    onChange([...items, { ...defaultItem }]);
  }

  function removeItem(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function updateItem(index: number, key: string, value: unknown) {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold">{label}</Label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fields.map((field) => (
                <div
                  key={field.key}
                  className={field.type === "textarea" ? "md:col-span-2" : ""}
                >
                  <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">
                    {field.label}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      value={(item[field.key] as string) || ""}
                      onChange={(e) =>
                        updateItem(index, field.key, e.target.value)
                      }
                      placeholder={field.placeholder}
                      rows={2}
                      className="text-sm"
                    />
                  ) : field.type === "color" ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={(item[field.key] as string) || "#000000"}
                        onChange={(e) =>
                          updateItem(index, field.key, e.target.value)
                        }
                        className="w-8 h-8 rounded border border-black/[0.06] cursor-pointer"
                      />
                      <Input
                        value={(item[field.key] as string) || ""}
                        onChange={(e) =>
                          updateItem(index, field.key, e.target.value)
                        }
                        placeholder={field.placeholder || "#000000"}
                        className="text-sm font-mono"
                      />
                    </div>
                  ) : (
                    <Input
                      value={(item[field.key] as string) || ""}
                      onChange={(e) =>
                        updateItem(index, field.key, e.target.value)
                      }
                      placeholder={field.placeholder}
                      className="text-sm"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
