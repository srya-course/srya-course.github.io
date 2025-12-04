import { Mail, Heart, Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  name?: string;
  introduction?: string;
  email?: string;
  avatarUrl?: string;
}

export default function HeroSection({ 
  name = "SubaRya",
  introduction = "我是一個開心的動漫宅",
  email = "example@example.com",
  avatarUrl
}: HeroSectionProps) {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 -z-10" />
      
      <div className="absolute top-10 left-10 animate-pulse">
        <Star className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse delay-300">
        <Heart className="w-8 h-8 text-chart-2/30" />
      </div>
      <div className="absolute bottom-16 left-1/4 animate-pulse delay-500">
        <Sparkles className="w-5 h-5 text-chart-3/30" />
      </div>
      <div className="absolute bottom-10 right-1/3 animate-pulse delay-700">
        <Star className="w-4 h-4 text-primary/30" />
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-chart-2 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 bg-card">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-chart-2/20">
                <Heart className="w-16 h-16 text-primary" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {name}
            </h1>
            <Sparkles className="w-5 h-5 text-chart-2" />
          </div>
          
          <p className="text-xl text-muted-foreground font-medium">
            {introduction}
          </p>

          <Card className="inline-block px-6 py-3 hover-elevate">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href={`mailto:${email}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-email"
              >
                {email}
              </a>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3" />
              動漫愛好者
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Heart className="w-3 h-3" />
              創作者
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="w-3 h-3" />
              學生
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
