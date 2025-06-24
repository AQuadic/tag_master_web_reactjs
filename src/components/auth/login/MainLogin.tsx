"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginStep1 = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <section className="flex flex-col items-center justify-center  container !max-w-[400px]">
      <Image src="/images/logo.png" alt="Logo" width={155} height={54} />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-center my-5 sm:my-8">
          تسجيل الدخول
        </h1>
        <p className="text-lg text-secondary-text text-center">
          أدخل البريد الاكتروني و كلمة المرور الخاصة بك لتسجيل الدخول إلى حسابك.
        </p>
      </div>
      <form className=" w-full">
        <Input
          className="border-neutral-700 w-full   "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
        />
        <Input
          type="password"
          className="border-neutral-700 w-full   "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
        />
        <Button></Button>
      </form>
      <Link className="text-primary text-lg" href="/auth/signup">
        ليس لديك حساب؟
      </Link>
    </section>
  );
};

export default LoginStep1;
