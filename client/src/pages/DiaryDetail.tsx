import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Calendar, ChevronLeft, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { DiaryEntry } from "@shared/schema";

export default function DiaryDetail() {
  const [location, setLocation] = useLocation();
  
  // Extract ID from URL like /diary/diary-2024-12-04
  const id = location.split("/diary/")[1];

  const { data: diaryEntries = [] } = useQuery<DiaryEntry[]>({
    queryKey: ["/content/diary.json"],
  });

  const entry = diaryEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <Card className="max-w-2xl w-full">
          <CardContent className="pt-12 pb-12 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">文章未找到</h2>
            <p className="text-muted-foreground">抱歉，找不到此日記條目</p>
            <Button onClick={() => setLocation("/")} className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              返回首頁
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="gap-2 p-0 h-auto"
        >
          <ChevronLeft className="w-4 h-4" />
          返回首頁
        </Button>

        {/* Article Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-4 pb-4">
            {/* Header with Date and Mood */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{entry.date}</span>
              </div>
              {entry.mood && (
                <Badge variant="secondary" className="text-sm">
                  {entry.mood}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              {entry.title}
            </h1>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-6">
            <article className="prose prose-invert max-w-none">
              <div className="markdown-content text-muted-foreground leading-relaxed [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-6 [&_h1]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-5 [&_h2]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-4 [&_h3]:mb-1 [&_code]:bg-slate-900 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {entry.content}
                </ReactMarkdown>
              </div>
            </article>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
      </div>
    </div>
  );
}
