"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainSignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <section className="flex flex-col items-center justify-center  container !max-w-[400px]  gap-5 sm:gap-8 my-10 sm:my-20">
      <Image src="/images/logo.png" alt="Logo" width={155} height={54} />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl"> أهلا بك في Tag master</h1>
        <p className="text-lg text-secondary-text ">
          قم بإنشاء حساب جديد لتتمكن من استخدام جميع ميزات التطبيق.
        </p>
      </div>
      <form className=" w-full flex flex-col gap-5 sm:gap-8">
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
        <Input
          type="password"
          className="border-neutral-700 w-full   "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" تأكيد كلمة المرور"
        />
        <Button> إنشاء حساب</Button>
      </form>
      <Link className="text-primary text-lg self-start" href="/auth/signup">
        شروط الخصوصية
      </Link>
    </section>
  );
};

export default MainSignUp;
