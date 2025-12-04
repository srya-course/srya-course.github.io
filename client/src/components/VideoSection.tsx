import { Video as VideoIcon, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string | null;
  embedUrl?: string | null;
  duration?: string | null;
  category?: string | null;
}

interface VideoSectionProps {
  videos?: VideoItem[];
  onVideoClick?: (id: string) => void;
}

export default function VideoSection({ videos = [], onVideoClick }: VideoSectionProps) {
  const handleVideoClick = (id: string) => {
    console.log(`Playing video: ${id}`);
    onVideoClick?.(id);
  };

  return (
    <section className="py-16 px-6 bg-accent/30" id="videos">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <VideoIcon className="w-8 h-8 text-primary" />
            我的影片
          </h2>
          <p className="text-muted-foreground">影片創作與分享</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all"
              data-testid={`card-video-${video.id}`}
            >
              <div 
                className="relative aspect-video bg-muted cursor-pointer group"
                onClick={() => handleVideoClick(video.id)}
              >
                {video.thumbnailUrl ? (
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-chart-2/10">
                    <VideoIcon className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>

                {video.duration && (
                  <Badge className="absolute bottom-2 right-2 bg-black/70">
                    {video.duration}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {video.title}
                  </h3>
                  {video.category && (
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {video.category}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
