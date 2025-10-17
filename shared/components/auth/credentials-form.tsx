'use client';

import {
  credentialsSchema,
  credentialsType,
} from '@/shared/shemas/credentials';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export const CredentialsForm = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const form = useForm<credentialsType>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: credentialsType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  {isHidden ? (
                    <div className="relative">
                      <Input type="password" placeholder="*****" {...field} />
                      <FaEye
                        className="absolute right-2 top-1/2 translate-[-50%] h-5 w-5 cursor-pointer"
                        onClick={() => setIsHidden((prev) => !prev)}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <Input type="text" placeholder="*****" {...field} />
                      <FaEyeSlash
                        className="absolute right-2 top-1/2 translate-[-50%] h-5 w-5 cursor-pointer"
                        onClick={() => setIsHidden((prev) => !prev)}
                      />
                    </div>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
};
