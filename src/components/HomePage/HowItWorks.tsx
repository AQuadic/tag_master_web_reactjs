import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HowItWorks = () => {
    const t = useTranslations("howItWorks");
    return (
        <section className='container'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <Image 
                    src='/images/home/howItWorks.png' 
                    alt='tagmaster image' 
                    width={387} 
                    height={387} 
                    />
                <div className='mt-4 lg:mt-0'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#000000] text-[25px] font-bold'>{t('howItWorks')}</h1>
                        <Link href='/' className='text-[#007CC2] text-[17px]'>{t('knowMore')}</Link>
                    </div>
                    <ul className="mt-[21px] text-[#333333] text-[17px] space-y-[34px]">
                        <li className="group mt-[21px] rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            {t('rule1')}
                        </li>
                        <li className="group rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            {t('rule2')}
                        </li>
                        <li className="group rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            {t('rule3')}
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
