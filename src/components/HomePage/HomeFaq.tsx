"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlueArrow from '../icons/home/BlueArrow'
import { useTranslations } from 'next-intl'

const faqs = [
    {
        id: 1,
        question: '1. ما هي بطاقة تاج ماستر الإلكترونية؟',
        answer: 'بطاقة تاج ماستر هي بطاقة إلكترونية ذكية تحتوي على جميع معلوماتك وروابطك المهمة، مثل وسائل التواصل الاجتماعي، رقم الهاتف، البريد الإلكتروني، خدماتك، وغيرها، في مكان واحد يسهل مشاركته مع عملائك.'
    },
    {
        id: 2,
        question: '2. ما هي بطاقة تاج ماستر الإلكترونية؟',
        answer: 'بطاقة تاج ماستر هي بطاقة إلكترونية ذكية تحتوي على جميع معلوماتك وروابطك المهمة، مثل وسائل التواصل الاجتماعي، رقم الهاتف، البريد الإلكتروني، خدماتك، وغيرها، في مكان واحد يسهل مشاركته مع عملائك.'
    },
    {
        id: 3,
        question: '3. لمن تصلح هذه البطاقة؟',
        answer: 'بطاقة تاج ماستر هي بطاقة إلكترونية ذكية تحتوي على جميع معلوماتك وروابطك المهمة، مثل وسائل التواصل الاجتماعي، رقم الهاتف، البريد الإلكتروني، خدماتك، وغيرها، في مكان واحد يسهل مشاركته مع عملائك.'
    },
    {
        id: 4,
        question: '4. كيف أحصل على بطاقتي الإلكترونية؟',
        answer: 'بطاقة تاج ماستر هي بطاقة إلكترونية ذكية تحتوي على جميع معلوماتك وروابطك المهمة، مثل وسائل التواصل الاجتماعي، رقم الهاتف، البريد الإلكتروني، خدماتك، وغيرها، في مكان واحد يسهل مشاركته مع عملائك.'
    },
    {
        id: 5,
        question: '5. هل أستطيع تعديل معلومات البطاقة لاحقًا؟',
        answer: 'بطاقة تاج ماستر هي بطاقة إلكترونية ذكية تحتوي على جميع معلوماتك وروابطك المهمة، مثل وسائل التواصل الاجتماعي، رقم الهاتف، البريد الإلكتروني، خدماتك، وغيرها، في مكان واحد يسهل مشاركته مع عملائك.'
    },
]

const HomeFaq = () => {
    const t = useTranslations("faq");
const [openAccordion, setOpenAccordion] = useState<number | null>(null)

const toggleAccordion = (id: number) => {
    setOpenAccordion(prev => (prev === id ? null : id))
}

    return (
        <section className='bg-[#F6F7FB] mt-20'>
            <div className='container md:py-40 py-10 flex lg:flex-row flex-col lg:items-start items-center justify-between gap-10'>
                <div>
                    <h2 className='text-[#000000] rtl:md:text-[50px] ltr:md:text-[40px] text-2xl font-bold'>{t('anyQuestions')}</h2>
                    <h2 className='text-[#000000] rtl:md:text-[50px] ltr:md:text-[40px] text-2xl font-bold'>{t('answer')}</h2>
                    <p className='md:w-[380px] text-[#525659] text-[17px] font-normal mt-[33px]'>
                        {t('faqDescription')}
                    </p>
                    <div className='flex items-center mt-20 gap-2.5'>
                        <p className='text-[#000000] text-base font-normal'>{t('seeMore')}</p>
                        <BlueArrow />
                    </div>
                </div>

                <div className='md:w-[600px]'>
                    <div className="w-full">
                        {faqs.map(({ id, question, answer }) => (
                            <div
                                key={id}
                                className="border-b border-[#B2B2B2] overflow-hidden mt-6 first:mt-0"
                            >
                                <h2>
                                    <button
                                        type="button"
                                        className="cursor-pointer flex items-center justify-between w-full p-5 focus:ring-0 gap-3"
                                        onClick={() => toggleAccordion(id)}
                                    >
                                        <span className='text-[#000000] text-[17px] font-bold'>{question}</span>
                                        <p className='text-[#525659] text-[17px] font-normal'>{openAccordion === id ? "-" : "+"}</p>
                                    </button>
                                </h2>
                                <AnimatePresence initial={false}>
                                    {openAccordion === id && (
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
                                                    {answer}
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
