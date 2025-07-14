import { useTranslations } from "next-intl";
import React from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UplaodImage from "../icons/products/UplaodImage";

const SingleProductReviews = () => {
  const t = useTranslations("products");

  return <section>
    <div className="flex  items-end gap-3">
      <h2 className="text-[#000000] text-[22px] font-medium">{t('userReviews')}</h2>
      <p className="text-[rgb(156,156,156)] text-base">23 {t("review")}</p>
    </div>

    <div className="flex items-center gap-2.5 my-2">
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
      </div>

      <p className="text-[#9C9C9C] text-base">{t("reviewRate")}</p>

      <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="w-[203px] h-12 border-2 border-[#007CC2] mt-7 rounded-[39px]">
            <p className="text-[#000000] text-base">{t("rateProduct")}</p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle>{t('rateFrom')}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-2.5 mt-2">
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
              </div>
            <p className="text-[#9C9C9C] text-lg mt-2">{t("youRated")}</p>
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="mt-5 flex items-center gap-4">
              <p className="text-[#4A4A4A] text-lg">{t("addPhoto")}</p>
              <UplaodImage />
            </div>
            <textarea 
              name="comment" 
              id="comment" 
              className="w-full h-[157px] border border-[#9C9C9C] mt-5 rounded-[12px] p-8"></textarea>
          </div>
          <DialogFooter className="mx-auto">
            <Button type="submit" className="rounded-[39px] bg-[#007CC2] px-14">{t('addRate')}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  </section>;
};

export default SingleProductReviews;