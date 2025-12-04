import { Heart, Mail, Sparkles } from "lucide-react";

interface FooterProps {
  name?: string;
  email?: string;
}

export default function Footer({ name = "SubaRya", email = "example@example.com" }: FooterProps) {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              {name} 的部落格
            </span>
            <Sparkles className="w-5 h-5 text-chart-2" />
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a 
              href={`mailto:${email}`}
              className="hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              {email}
            </a>
          </div>

          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by {name}</span>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2024 {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
