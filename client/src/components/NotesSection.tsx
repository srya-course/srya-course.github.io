import { StickyNote, Tag, Search, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export interface Note {
  id: string;
  title: string;
  category: string;
  tags: string[];
  preview: string;
  date: string;
}

interface NotesSectionProps {
  notes?: Note[];
  onNoteClick?: (id: string) => void;
}

export default function NotesSection({ notes = [], onNoteClick }: NotesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(notes.map(note => note.category)));
  
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNoteClick = (id: string) => {
    console.log(`Opening note: ${id}`);
    onNoteClick?.(id);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section className="py-16 px-6" id="notes">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            我的筆記
          </h2>
          <p className="text-muted-foreground">學習與知識的累積</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜尋筆記..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-notes"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer gap-1"
                onClick={() => handleCategoryClick(category)}
                data-testid={`badge-category-${category}`}
              >
                <Tag className="w-3 h-3" />
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <Card 
              key={note.id}
              className="hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => handleNoteClick(note.id)}
              data-testid={`card-note-${note.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {note.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{note.date}</p>
                  </div>
                  <Badge variant="outline">{note.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  {note.preview}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {note.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <StickyNote className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">找不到符合的筆記</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
