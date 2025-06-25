import Link from 'next/link'
import React from 'react'

const HowItWorks = () => {
    return (
        <section className='container'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='md:w-[387px] h-[387px] bg-purple-500 flex justify-center'></div>
                <div className='mt-4 lg:mt-0'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#000000] text-[25px] font-bold'>كيف يعمل تاج ماستر</h1>
                        <Link href='/' className='text-[#007CC2] text-[17px]'>اعرف المزيد</Link>
                    </div>
                    <ul className="mt-[21px] text-[#333333] text-[17px] space-y-[34px]">
                        <li className="group mt-[21px] rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            1-يعمل التطبيق عبر توليد كود مخصص يمكنك مشاركته, وعند قيام الاخرين بمسحه عبر هواتفهم, يتم توجيههم مباشرة إلي صفحة تحتوي علي معلوماتك المهنية وروابطك الاجتماعية, مما يسهل التواصل والتعرف علي خبراتك
                        </li>
                        <li className="group rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            2-يعمل التطبيق عبر توليد كود مخصص يمكنك مشاركته, وعند قيام الاخرين بمسحه عبر هواتفهم, يتم توجيههم مباشرة إلي صفحة تحتوي علي معلوماتك المهنية وروابطك الاجتماعية, مما يسهل التواصل والتعرف علي خبراتك
                        </li>
                        <li className="group rounded-md border border-transparent transition-all duration-300 ease-in-out hover:border-[#D8D8D8] hover:shadow-md hover:p-5 hover:scale-[1.02]">
                            3-يعمل التطبيق عبر توليد كود مخصص يمكنك مشاركته, وعند قيام الاخرين بمسحه عبر هواتفهم, يتم توجيههم مباشرة إلي صفحة تحتوي علي معلوماتك المهنية وروابطك الاجتماعية, مما يسهل التواصل والتعرف علي خبراتك
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
