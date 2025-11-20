import { Image as ImageIcon, ZoomIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string | null;
}

interface GallerySectionProps {
  images?: GalleryImage[];
  addButton?: React.ReactNode;
}

export default function GallerySection({ images = [], addButton }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    console.log(`Opening image: ${image.title}`);
    setSelectedImage(image);
  };

  return (
    <section className="py-16 px-6 bg-accent/30" id="gallery">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-2">
              <ImageIcon className="w-8 h-8 text-primary" />
              我的圖畫
            </h2>
            {addButton}
          </div>
          <p className="text-muted-foreground">創作與靈感的展示</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card 
              key={image.id}
              className="group overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all"
              onClick={() => handleImageClick(image)}
              data-testid={`card-gallery-${image.id}`}
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white space-y-1">
                    <p className="font-semibold text-sm">{image.title}</p>
                    <div className="flex items-center gap-1 text-xs">
                      <ZoomIn className="w-3 h-3" />
                      <span>點擊查看</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full rounded-md"
              />
              {selectedImage.description && (
                <p className="text-muted-foreground">{selectedImage.description}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
