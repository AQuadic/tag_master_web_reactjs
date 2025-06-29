"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { postSignUp } from "@/api/auth/signUp";

const MainSignUp = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postSignUp({
        name,
        phone,
        phone_country: "EG",
        email,
        password,
      });

      toast.success("تم إنشاء الحساب بنجاح");
      console.log("Signup successful:", response);
    } catch (err: any) {
      const errors = err?.response?.data?.errors;
      if (errors) {
        Object.values(errors).forEach((msgs: any) => {
          msgs.forEach((msg: string) => toast.error(msg));
        });
      } else {
        toast.error("حدث خطأ أثناء إنشاء الحساب");
      }
    }
  };

  return (
    <section className="flex flex-wrap items-center justify-center container gap-5 sm:gap-8 my-10 sm:my-20">
        <Image src="/images/signIMG.png" alt="Sign" width={724} height={911} />
      <div>
        <Image src="/images/logo.png" alt="Logo" width={155} height={54} />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl"> أهلا بك في Tag master</h1>
        <p className="text-lg text-secondary-text ">
          قم بإنشاء حساب جديد لتتمكن من استخدام جميع ميزات التطبيق.
        </p>
      </div>
      <form onSubmit={handleSignUp} className=" w-full flex flex-col gap-5 sm:gap-8">
        <Input
          className="border-neutral-700 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="الاسم الكامل"
        />
        <Input
          className="border-neutral-700 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="رقم الهاتف"
        />
        <Input
          className="border-neutral-700 w-full   "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
        />{" "}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            className="border-neutral-700 w-full rtl:pl-10 ltr:pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
          />
          <button
            type="button"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>{" "}
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            className="border-neutral-700 w-full rtl:pl-10 ltr:pr-10"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" تأكيد كلمة المرور"
          />
          <button
            type="button"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <Button type="submit">إنشاء حساب</Button>
      </form>
      <Link className="text-primary text-lg self-start" href="/auth/signup">
        شروط الخصوصية
      </Link>
      </div>
    </section>
  );
};

export default MainSignUp;
