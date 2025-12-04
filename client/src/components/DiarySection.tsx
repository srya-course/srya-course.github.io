import { Calendar, ChevronRight, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface DiaryEntry {
  id: string;
  title: string;
  date: string;
  preview: string;
  mood?: string | null;
}

interface DiarySectionProps {
  entries?: DiaryEntry[];
  onReadMore?: (id: string) => void;
}

export default function DiarySection({ entries = [], onReadMore }: DiarySectionProps) {
  const handleReadMore = (id: string) => {
    console.log(`Reading diary entry: ${id}`);
    onReadMore?.(id);
  };

  return (
    <section className="py-16 px-6" id="diary">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            我的日記
          </h2>
          <p className="text-muted-foreground">記錄生活中的美好時刻</p>
        </div>

        <div className="space-y-6">
          {entries.map((entry) => (
            <Card key={entry.id} className="hover-elevate transition-all" data-testid={`card-diary-${entry.id}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                {entry.mood && (
                  <Badge variant="secondary" className="text-xs">
                    {entry.mood}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {entry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {entry.preview}
                </p>
                <Button 
                  variant="ghost" 
                  className="gap-1 p-0 h-auto"
                  onClick={() => handleReadMore(entry.id)}
                  data-testid={`button-read-${entry.id}`}
                >
                  閱讀更多
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
