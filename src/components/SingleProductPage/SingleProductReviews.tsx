import { useTranslations } from "next-intl";
import React, { useState } from "react";
import ReviewStarIcon from "../icons/general/ReviewStarIcon";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UplaodImage from "../icons/products/UplaodImage";
import Image from "next/image";
import userImage from '../../../public/images/products/userimage.svg'
import productReview from '../../../public/images/products/productReview.svg'
import { toast } from "sonner";
import { createReview, CreateReviewPayload } from "@/api/reviews/postReviews";

interface SingleProductReviewsProps {
  productId: string;
  reviewableType?: string;
}

const SingleProductReviews = ({ productId, reviewableType = "product" }: SingleProductReviewsProps) => {
  const t = useTranslations("products");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload: CreateReviewPayload = {
        reviewable_type: reviewableType,
        reviewable_id: productId,
        rating: rating,
        comment: comment.trim() || undefined,
      };

      console.log("Submitting review payload:", payload); // Debug log

      const response = await createReview(payload);

      if (response.status === "success") {
        toast.success(response.message || "Review submitted successfully");
        
        setRating(0);
        setComment("");
        setIsDialogOpen(false);
        
      }
    } catch (error: any) {
      console.error("Review submission error:", error);
      const errorMessage = error?.response?.data?.message || 
                          error?.message || 
                          "Failed to submit review";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="flex justify-between">
    <div>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button 
            type="button"
            className="w-[203px] h-12 border-2 border-[#007CC2] mt-7 rounded-[39px]"
          >
            <p className="text-[#000000] text-base">{t("rateProduct")}</p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader className="flex flex-col items-center">
              <DialogTitle>{t("rateFrom")}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center gap-2.5 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`cursor-pointer transition-opacity ${
                        i <= rating ? "opacity-100" : "opacity-30"
                      }`}
                      onClick={() => setRating(i)}
                    >
                      <ReviewStarIcon />
                    </div>
                  ))}
                </div>
                <p className="text-[#9C9C9C] text-lg mt-2">
                  {t("youRated")} {rating} / 5
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <p className="text-[#4A4A4A] text-lg">{t("addPhoto")}</p>
                <UplaodImage />
              </div>
              <textarea
                name="comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-[157px] border border-[#9C9C9C] mt-5 rounded-[12px] p-8"
                placeholder={t("writeYourReview")}
              />
            </div>
            <DialogFooter className="mx-auto">
              <Button
                type="submit"
                className="rounded-[39px] bg-[#007CC2] px-14"
                disabled={isSubmitting || rating === 0}
              >
                {isSubmitting ? t("submitting") : t("addRate")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>

    <div>
        <div className="flex gap-2.5">
          <Image
            src={userImage}
            width={40}
            height={40}
            alt="user image"
            className="rounded"
          />
          <div>
            <h2 className="text-[#000000] text-base font-medium">علي محمد</h2>
            <p className="text-[#9C9C9C] text-sm">نوفمبر 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-1 my-4">
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <p className="text-[#9C9C9C] text-base mx-2">5.0</p>
      </div>

      <div className="flex items-center gap-1.5">
        <Image
            src={productReview}
            width={40}
            height={40}
            alt="user image"
            className="rounded"
          />

          <Image
            src={productReview}
            width={40}
            height={40}
            alt="user image"
            className="rounded"
          />
      </div>

      <p className="text-[#000000] text-lg font-medium mt-0.5">منتج عملي وذكي</p>
      <p className="text-[#4A4A4A] text-sm mt-[11px]">استخدمت الميدالية لإضافة بطاقة عملي ورابط حساباتي على السوشيال ميديا، وكانت تجربة ممتازة. التوصيل سريع</p>

      {/* review 2 */}
      <div className="flex gap-2.5 mt-8">
        <Image
          src={userImage}
          width={40}
          height={40}
          alt="user image"
          className="rounded"
        />
        <div>
          <h2 className="text-[#000000] text-base font-medium">علي محمد</h2>
          <p className="text-[#9C9C9C] text-sm">نوفمبر 2024</p>
        </div>
      </div>

      <div className="flex items-center gap-1 my-4">
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <ReviewStarIcon />
        <p className="text-[#9C9C9C] text-base mx-2">5.0</p>
      </div>

      <div className="flex items-center gap-1.5">
        <Image
            src={productReview}
            width={40}
            height={40}
            alt="user image"
            className="rounded"
          />

          <Image
            src={productReview}
            width={40}
            height={40}
            alt="user image"
            className="rounded"
          />
      </div>

      <p className="text-[#000000] text-lg font-medium mt-0.5">منتج عملي وذكي</p>
      <p className="text-[#4A4A4A] text-sm mt-[11px]">استخدمت الميدالية لإضافة بطاقة عملي ورابط حساباتي على السوشيال ميديا، وكانت تجربة ممتازة. التوصيل سريع</p>
    </div>
  </section>;
};

export default SingleProductReviews;