"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="What shall I call you? ⭐" 
                  {...field} 
                  className="py-4 px-4 bg-slate-900/50 text-white border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/60 placeholder:text-gray-400 placeholder:italic transition-all duration-300 hover:border-yellow-400/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your star address (email) 🌟" 
                  {...field} 
                  className="py-4 px-4 bg-slate-900/50 text-white border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/60 placeholder:text-gray-400 placeholder:italic transition-all duration-300 hover:border-yellow-400/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your story... What brings you to my corner of the universe? Whether it's a project idea, collaboration, or just to say hello - I'd love to hear from you! ✨" 
                  rows={6} 
                  {...field} 
                  className="py-4 px-4 bg-slate-900/50 text-white border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400/60 resize-none placeholder:text-gray-400 placeholder:italic transition-all duration-300 hover:border-yellow-400/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 rounded-xl py-4 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transform border-2 border-yellow-400/50 hover:border-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending across the stars...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Launch Message 
              <span className="text-xl">🚀</span>
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}
