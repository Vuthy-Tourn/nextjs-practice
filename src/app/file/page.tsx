"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


// File validation function
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const registerSchema = z.object({
  file: z
    .any()
    .refine((file) => file instanceof File, "File is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 2MB")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .jpg, .png, .pdf files are allowed"
    ),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function InputForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Submitted:", data);
    // You can send to your API here
  };

  return (
    <div className="flex items-center justify-center w-full mx-auto rounded-lg shadow-md min-h-screen">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Import File</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* File Upload */}
              <FormField
                control={form.control}
                name="file"
                render={({ field: { onChange, ref } }) => (
                  <FormItem>
                    <FormLabel>Upload File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            onChange(e.target.files[0]);
                          }
                        }}
                        ref={ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
