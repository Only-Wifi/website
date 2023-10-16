"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import okImage from "@/images/ftok.svg";

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
import "./ContactForm.css";
import { Label } from "./ui/Label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import Image from "next/image";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
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
    setIsLoading(true);
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
      setIsSuccess(true);
      toast({
        title: "Thank you!",
        description: "Your message has been sent.",
      });
    } else {
      toast({
        title: "Oops!",
        description: "Something went wrong.",
        variant: "destructive",
      });
    }
    setTimeout(() => {
      console.log(result);
    }, 2000);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
        <div className="" hidden={isLoading || isSuccess}>
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
        </div>

        {isLoading ? (
          <div className="mail-div mx-auto">
            <svg className="mail" height="120" width="200">
              <polyline points="20,20 180,20 180,100 20,100 20,20 100,70 180,20" />
            </svg>
          </div>
        ) : isSuccess ? (
          <div className="bg-[#354a5f]/50 w-[230px] aspect-square rounded-full flex align-middle justify-center mx-auto">
            <Image src={okImage} width={100} height={100} alt="" />
          </div>
        ) : (
          <></>
        )}

        <div className="w-full flex items-center py-5">
          {isSuccess ? (
            <></>
          ) : (
            <Button
              className=" hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] mx-auto"
              variant="default"
              size="lg"
            >
              {isLoading ? <Loader className="animate-spin" /> : "SEND"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
