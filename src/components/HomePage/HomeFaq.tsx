'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlueArrow from '../icons/home/BlueArrow'
import { useTranslations, useLocale } from 'next-intl'
import { useQuery } from '@tanstack/react-query'
import { getFAQs } from '@/api/faq'
import Spinner from '../icons/general/Spinner'

const HomeFaq = () => {
  const t = useTranslations("faq")
  const locale = useLocale()
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(prev => (prev === index ? null : index))
  }

  const {
    data: faq,
    isLoading,
  } = useQuery({
    queryKey: ['faq'],
    queryFn: getFAQs,
  })

  if (isLoading) {
    return (
      <div className='flex justify-center my-10'>
        <Spinner />
      </div>
    )
  }

  return (
    <section className='bg-[#F6F7FB] mt-20'>
      <div className='container md:py-40 py-10 flex lg:flex-row flex-col lg:items-start items-center justify-between gap-10'>
        <div>
          <h2 className='text-[#000000] rtl:md:text-[50px] ltr:md:text-[40px] text-2xl font-bold'>{t('anyQuestions')}</h2>
          <h2 className='text-[#000000] rtl:md:text-[50px] ltr:md:text-[40px] text-2xl font-bold'>{t('answer')}</h2>
          <p className='md:w-[380px] text-[#525659] text-[17px] font-normal mt-[33px]'>{t('faqDescription')}</p>
          <div className='flex items-center mt-20 gap-2.5'>
            <p className='text-[#000000] text-base font-normal'>{t('seeMore')}</p>
            <BlueArrow />
          </div>
        </div>

        <div className='md:w-[600px]'>
          <div className="w-full">
            {Array.isArray(faq) && faq.map((item, index) => (
              <div key={item.id} className="border-b border-[#B2B2B2] overflow-hidden mt-6 first:mt-0">
                <h2>
                  <button
                    type="button"
                    className="cursor-pointer flex items-center justify-between w-full p-5 focus:ring-0 gap-3"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className='text-[#000000] text-[17px] font-bold'>
                      {item.question?.[locale] ?? "No question"}
                    </span>
                    <p className='text-[#525659] text-[17px] font-normal'>
                      {openAccordion === index ? "-" : "+"}
                    </p>
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {openAccordion === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-[#B2B2B2]">
                        <p className="mb-2 text-[#5D5D5D] text-base font-medium px-5">
                          {item.answer?.[locale] ?? "No answer"}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
