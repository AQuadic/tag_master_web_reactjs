import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LoginStep1Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const LoginStep1 = ({ email, setEmail, setStep }: LoginStep1Props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6">
      <Image src="/images/logo.png" alt="Logo" width={155} height={54} />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">تسجيل الدخول</h1>
        <p className="text-lg text-secondary-text">
          أدخل البريد الالكتروني وسنرسل لك رمز تسجيل الدخول
        </p>
      </div>
      <form>
        <Input
          className="border-neutral-700 w0-full   "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
        />
      </form>
      <Link className="text-main-blue text-lg" href="/auth/signup">
        ليس لديك حساب؟
      </Link>
    </section>
  );
};

export default LoginStep1;
