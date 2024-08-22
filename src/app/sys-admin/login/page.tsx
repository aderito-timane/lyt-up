"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm();
  return (
    <div className="h-full flex justify-center items-center">
      <Card className="min-w-[320px]">
        <CardHeader>
          <h1>Login</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <FormField
              name="username"
              render={() => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="email" />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormField
              name="password"
              render={() => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </Form>
        </CardContent>

        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
