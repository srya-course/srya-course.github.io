import { Heart, Sparkles, Star, BookOpen, Image, StickyNote, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onNavigate?: (section: string) => void;
  activeSection?: string;
}

export default function Navigation({ onNavigate, activeSection = "home" }: NavigationProps) {
  const navItems = [
    { id: "home", label: "首頁", icon: Heart },
    { id: "diary", label: "日記", icon: BookOpen },
    { id: "gallery", label: "圖畫", icon: Image },
    { id: "notes", label: "筆記", icon: StickyNote },
    { id: "videos", label: "影片", icon: Video },
  ];

  const handleClick = (id: string) => {
    console.log(`Navigating to ${id}`);
    onNavigate?.(id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              我的部落格
            </span>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleClick(item.id)}
                  className="gap-1.5"
                  data-testid={`button-nav-${item.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
