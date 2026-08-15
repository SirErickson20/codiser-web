import React from 'react';
import {
  Lightbulb,
  TrendingUp,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Radio,
  Share2,
  Building2,
  Rocket,
  PenTool,
  Megaphone,
  Calendar,
  FileText,
  Users,
  BarChart3,
  MousePointerClick,
  Bus,
  Tv,
  MonitorPlay,
  MapPin,
  Mail,
  Phone,
  Layers,
  Sparkles,
  Award,
  Globe,
  LucideProps
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const iconMap: Record<string, React.FC<LucideProps>> = {
    Lightbulb,
    TrendingUp,
    Sliders,
    ShieldCheck,
    CheckCircle2,
    Radio,
    Share2,
    Building2,
    Rocket,
    PenTool,
    Megaphone,
    Calendar,
    FileText,
    Users,
    BarChart3,
    MousePointerClick,
    Bus,
    Tv,
    MonitorPlay,
    MapPin,
    Mail,
    Phone,
    Layers,
    Sparkles,
    Award,
    Globe
  };

  const Component = iconMap[name] || Sparkles;
  return <Component {...props} />;
};
