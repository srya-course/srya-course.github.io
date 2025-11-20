import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertNoteSchema, type InsertNote } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = insertNoteSchema.extend({
  tagsString: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AddNoteForm() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      tagsString: "",
      preview: "",
      content: "",
      date: new Date().toISOString().split('T')[0],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertNote) => {
      return await apiRequest("POST", "/api/notes", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/notes"] });
      toast({
        title: "成功",
        description: "筆記已成功新增",
      });
      form.reset();
      setOpen(false);
    },
    onError: () => {
      toast({
        title: "錯誤",
        description: "新增筆記失敗，請重試",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    const { tagsString, ...rest } = data;
    const tags = tagsString
      ? tagsString.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];
    
    mutation.mutate({
      ...rest,
      tags,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2" data-testid="button-add-note">
          <Plus className="w-4 h-4" />
          新增筆記
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>新增筆記</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>標題</FormLabel>
                  <FormControl>
                    <Input placeholder="筆記標題..." {...field} data-testid="input-note-title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>分類</FormLabel>
                    <FormControl>
                      <Input placeholder="語言學習、繪畫技巧..." {...field} data-testid="input-note-category" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>日期</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} data-testid="input-note-date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tagsString"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>標籤（用逗號分隔）</FormLabel>
                  <FormControl>
                    <Input placeholder="日語, 基礎, 五十音" {...field} data-testid="input-note-tags" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>摘要</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="簡短摘要..." 
                      className="resize-none" 
                      rows={2}
                      {...field}
                      data-testid="input-note-preview"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>內容</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="詳細內容..." 
                      className="resize-none" 
                      rows={8}
                      {...field}
                      data-testid="input-note-content"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                data-testid="button-cancel-note"
              >
                取消
              </Button>
              <Button type="submit" disabled={mutation.isPending} data-testid="button-submit-note">
                {mutation.isPending ? "新增中..." : "新增"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
