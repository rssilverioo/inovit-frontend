"use client";

import { Label } from "@/components/ui/label";
import {
  Code2,
  Cloud,
  Palette,
  Rocket,
  MessageSquare,
  Pencil,
  CheckCircle2,
  Cpu,
  Users,
  Gauge,
  ShieldCheck,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Linkedin,
  Instagram,
  Github,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Cloud,
  Palette,
  Rocket,
  MessageSquare,
  Pencil,
  CheckCircle2,
  Cpu,
  Users,
  Gauge,
  ShieldCheck,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Linkedin,
  Instagram,
  Github,
};

interface IconSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export function IconSelect({ label, value, onChange }: IconSelectProps) {
  return (
    <div>
      {label && (
        <Label className="text-xs text-[#0A0A0A]/50 mb-1 block">{label}</Label>
      )}
      <div className="flex flex-wrap gap-1.5">
        {Object.entries(iconMap).map(([name, Icon]) => (
          <button
            key={name}
            type="button"
            onClick={() => onChange(name)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              value === name
                ? "bg-[#00D28C]/15 text-[#00D28C] ring-1 ring-[#00D28C]/30"
                : "bg-[#0A0A0A]/[0.03] text-[#0A0A0A]/30 hover:text-[#0A0A0A]/50 hover:bg-[#0A0A0A]/[0.06]"
            }`}
            title={name}
          >
            <Icon className="size-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

export { iconMap };
