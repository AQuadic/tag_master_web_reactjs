"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { postSignIn } from '@/api/auth';
import { useAuthStore } from '../stores/userStore';

const MainLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await postSignIn({ email, password });
      setUser(res.user);
      Cookies.set('tag-master-token', res.token);

      toast.success('تم تسجيل الدخول بنجاح'); 
      router.push('/');
    } catch (err: any) {
      console.error('Login error:', err);
      const errorMessage =
        err.response?.data?.message || 'فشل تسجيل الدخول.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  return (
    <section className="flex flex-wrap items-center justify-center  container  gap-5 sm:gap-8 my-10 sm:my-20">
      {/* <Image src="/images/signIMG.png" alt="Sign" width={724} height={911} /> */}
      <div>
        <Image src="/images/logo.png" alt="Logo" width={155} height={54} className="mx-auto mb-4"/>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-center">تسجيل الدخول</h1>
        <p className="text-lg text-secondary-text text-center my-4">
          أدخل البريد الاكتروني و كلمة المرور الخاصة بك لتسجيل الدخول إلى حسابك.
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-5 sm:gap-8">
        <Input
          className="border-neutral-700 w-full   "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
          required
        />{" "}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            className="border-neutral-700 w-full rtl:pl-10 ltr:pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            required
          />
          <button
            type="button"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <Button disabled={loading} className="mb-2">
          {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
        </Button>
      </form>
      <Link className="text-primary text-lg self-start" href="/auth/signup">
        ليس لديك حساب؟
      </Link>
      </div>
    </section>
  );
};

export default MainLogin;
