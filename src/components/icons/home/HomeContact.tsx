import Link from 'next/link'
import React from 'react'

const HomeContact = () => {
    return (
        <section className='container mt-20'>
            <div className='flex flex-col items-center'>
                <Link href='/' className='text-[#007CC2] text-[17px]'>أرسل لنا أفكارك</Link>
                <h2 className='text-[#000000] text-[25px] font-bold mt-3'>تواصل معنا</h2>
                <p className='md:w-[739px] text-[#525659] text-[17px] text-center mt-6'>هل لديك أي استفسار؟ فريق تاج ماستر هنا لخدمتك بكل احترافية. سواء كنتِ ترغب في طلب بطاقة إلكترونية، تعديل معلوماتك، أو لديكِ فكرة خاصة تود تنفيذها—يسعدنا سماعك! </p>
                <p className='text-[#525659] text-[17px] text-center'> يمكنك التواصل معنا عبر النموذج أدناه</p>
                <form className='md:mt-[67px] mt-4'>
                    <div className='flex flex-wrap gap-4'>
                        <input 
                            type="text" 
                            placeholder='اسم المستخدم' 
                            className='md:w-[331.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2'
                            />
                            <input 
                            type="email" 
                            placeholder='البريد الالكتروني' 
                            className='md:w-[331.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2'
                            />
                    </div>

                    <div className='flex flex-wrap gap-4 mt-6'>
                        <input 
                            type="text" 
                            placeholder='رقم الهاتف' 
                            className='md:w-[331.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2'
                            />
                            <input 
                            type="email" 
                            placeholder='موضوع الرسالة' 
                            className='md:w-[331.5px] w-full h-11 bg-[#F6F7FB] border border-[#C8C5C5] rounded-md px-2'
                            />
                    </div>

                    <div className='mt-6'>
                        <textarea 
                            name="message" 
                            id="message"
                            className='w-full h-[165px] bg-[#F6F7FB] border border-[#C8C5C5] rounded-md p-2'
                            placeholder='أكتب رسالتك هنا...'
                            ></textarea>
                    </div>

                    <div className='mt-6 flex justify-end'>
                        <button className='w-[160px] h-11 bg-[#007CC2] rounded-[39px] text-[#FFFFFF] text-base'>ارسال الرسالة</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default HomeContact
