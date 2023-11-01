"use client"
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/newbutton"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const languages = [
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const
type ComboboxFormProps = {
  setSelectedLanguage: (language: string) => void;
};
const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
})

export function ComboboxForm({ setSelectedLanguage }: ComboboxFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Supported Languages:</FormLabel>
              <Popover >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between border-2 border-gray-600 rounded-md",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0 border-2 border-gray-600 rounded-md ">
                  <Command className="bg-gray-900 border-1 border-gray-600 rounded-md "
>
                    <CommandInput placeholder="Search Languages..." />
                    <CommandEmpty>No Language found.</CommandEmpty>
                    <CommandGroup className="border-1 border-gray-600 rounded-md">
                      {languages.map((language) => (
                        <CommandItem
                          className="bg-gray-800"
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value)
                            form.setValue("language", language.value);
                            setSelectedLanguage(language.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language to which input text will be translated.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}