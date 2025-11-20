import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertVideoSchema, type InsertVideo } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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

export default function AddVideoForm() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertVideo>({
    resolver: zodResolver(insertVideoSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnailUrl: "",
      embedUrl: "",
      duration: "",
      category: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertVideo) => {
      return await apiRequest("POST", "/api/videos", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/videos"] });
      toast({
        title: "成功",
        description: "影片已成功新增",
      });
      form.reset();
      setOpen(false);
    },
    onError: () => {
      toast({
        title: "錯誤",
        description: "新增影片失敗，請重試",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertVideo) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2" data-testid="button-add-video">
          <Plus className="w-4 h-4" />
          新增影片
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>新增影片</DialogTitle>
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
                    <Input placeholder="影片標題..." {...field} data-testid="input-video-title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>描述</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="影片描述..." 
                      className="resize-none" 
                      rows={3}
                      {...field}
                      data-testid="input-video-description"
                    />
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
                    <FormLabel>分類（選填）</FormLabel>
                    <FormControl>
                      <Input placeholder="教學、Vlog..." {...field} value={field.value ?? ""} data-testid="input-video-category" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>時長（選填）</FormLabel>
                    <FormControl>
                      <Input placeholder="15:32" {...field} value={field.value ?? ""} data-testid="input-video-duration" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="thumbnailUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>縮圖網址（選填）</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/thumbnail.jpg" {...field} value={field.value ?? ""} data-testid="input-video-thumbnail" />
                  </FormControl>
                  <FormDescription>
                    影片縮圖的完整網址
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="embedUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>嵌入網址（選填）</FormLabel>
                  <FormControl>
                    <Input placeholder="https://youtube.com/embed/..." {...field} value={field.value ?? ""} data-testid="input-video-embed" />
                  </FormControl>
                  <FormDescription>
                    YouTube 或其他平台的嵌入網址
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                data-testid="button-cancel-video"
              >
                取消
              </Button>
              <Button type="submit" disabled={mutation.isPending} data-testid="button-submit-video">
                {mutation.isPending ? "新增中..." : "新增"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
