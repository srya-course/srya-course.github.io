import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertGalleryImageSchema, type InsertGalleryImage } from "@shared/schema";
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

export default function AddGalleryImageForm() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertGalleryImage>({
    resolver: zodResolver(insertGalleryImageSchema),
    defaultValues: {
      title: "",
      description: "",
      url: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertGalleryImage) => {
      return await apiRequest("POST", "/api/gallery-images", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/gallery-images"] });
      toast({
        title: "成功",
        description: "圖片已成功新增",
      });
      form.reset();
      setOpen(false);
    },
    onError: () => {
      toast({
        title: "錯誤",
        description: "新增圖片失敗，請重試",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertGalleryImage) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2" data-testid="button-add-image">
          <Plus className="w-4 h-4" />
          新增圖片
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>新增圖片</DialogTitle>
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
                    <Input placeholder="圖片標題..." {...field} data-testid="input-image-title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>圖片網址</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} data-testid="input-image-url" />
                  </FormControl>
                  <FormDescription>
                    輸入圖片的完整網址
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>描述（選填）</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="描述這張圖片..." 
                      className="resize-none" 
                      rows={3}
                      {...field}
                      value={field.value ?? ""}
                      data-testid="input-image-description"
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
                data-testid="button-cancel-image"
              >
                取消
              </Button>
              <Button type="submit" disabled={mutation.isPending} data-testid="button-submit-image">
                {mutation.isPending ? "新增中..." : "新增"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
