"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/TextArea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler. 48f1ecd2-b923-4bfa-84a8-bb7b64884e8b
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const object = {
      access_key: "48f1ecd2-b923-4bfa-84a8-bb7b64884e8b",
      name: values.name,
      email: values.email,
      message: values.message,
    };
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-foreground"
                  placeholder="name..."
                  {...field}
                />
              </FormControl>
              <FormDescription>What can we call you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-foreground"
                  placeholder="email..."
                  {...field}
                />
              </FormControl>
              <FormDescription>How can we reach you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-foreground"
                  placeholder="write something..."
                  {...field}
                />
              </FormControl>
              <FormDescription>How can we help you?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
        <div className="w-full flex items-center py-5">
          <Button
            className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] mx-auto"
            variant="default"
            size="lg"
          >
            SEND
          </Button>
        </div>
      </form>
    </Form>
  );
}
