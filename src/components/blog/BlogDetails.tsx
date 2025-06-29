import Image from 'next/image'
import React from 'react'
import Bookmark from '../icons/blogs/Bookmark'

const BlogDetails = () => {
        const BlogsSection = [
        {
            image: '/images/home/blogs/bigblog1.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog2.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog3.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
                {
            image: '/images/home/blogs/bigblog1.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog2.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog3.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
                {
            image: '/images/home/blogs/bigblog1.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog2.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog3.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
    ]
    return (
        <section className='container py-10'>
            <h1 className='text-[#000000] text-2xl font-semibold'>الكروت والميداليات الذكية</h1>
            <Image
                src='/images/blogs/blogImage.png'
                alt='blog image'
                width={1200}
                height={524}
                className='mt-7'
                />
                <div className='text-[#000000]'>
                    <h2 className='text-[22px] font-semibold mt-7'>مستقبل التواصل السريع باستخدام QR وNFC</h2>
                    <p className='text-xl mt-2'>في عالم يتجه نحو السرعة والابتكار، أصبحت الحاجة إلى وسائل تواصل أكثر ذكاءً ومرونة أمرًا ضروريًا، خصوصًا في مجالات الأعمال والتسويق والتعريف بالهوية الشخصية. وهنا يأتي دور الكروت والميداليات الذكية التي تدعم تقنيتي QR Code وNFC، والتي باتت تمثل ثورة في طريقة مشاركة المعلومات.</p>
                    <h2 className='text-[22px] font-semibold mt-8'>ما هي الكروت والميداليات الذكية؟</h2>
                    <p className='text-xl'>الكروت والميداليات الذكية هي أدوات صغيرة تُصنع عادة من البلاستيك أو المعدن أو مواد صديقة للبيئة، وتُدمج فيها تقنيتان رئيسيتان:</p>
                    <ul className='list-disc text-xl px-8'>
                        <li>رمز الاستجابة السريعة (QR Code): يُمكن مسحه عبر كاميرا الهاتف ليأخذ المستخدم مباشرة إلى موقع ويب، بطاقة تعريفية، ملف، أو أي نوع من البيانات.</li>
                        <li>الاتصال قريب المدى (NFC): تقنية تتيح نقل البيانات بمجرد تمرير البطاقة أو الميدالية بالقرب من الهاتف، دون الحاجة لفتح الكاميرا أو التطبيقات.</li>
                    </ul>
                    <p>استخدامات هذه التقنية</p>
                    <ul className='list-decimal text-xl px-8'>
                        <li>كروت العمل الرقمية: يمكن لصاحب العمل أو رائد الأعمال تمرير بطاقته على هاتف العميل، فيحصل العميل فورًا على كل بياناته (الاسم، الهاتف، البريد، روابط التواصل).</li>
                        <li>الميداليات التعريفية: تُستخدم للمؤتمرات أو الفرق الرياضية، وتحتوي على روابط لمواقع المشاركين أو معلومات الطوارئ.</li>
                        <li>الوصول السريع للمواقع والمتاجر الإلكترونية: يمكن استخدامها كبوابة دخول سريعة لعروض خاصة أو متاجر إلكترونية، ما يفتح آفاقًا جديدة للتسويق الذكي.</li>
                        <li>الهويات الذكية للطلاب أو الموظفين: تُمكّن من تسجيل الحضور أو الدخول إلى الأنظمة الذكية داخل المؤسسات.</li>
                    </ul>
                    <h2 className='text-[#000000] text-[22px] font-medium'>لماذا تدمج QR وNFC معًا؟</h2>
                    <p className='text-[#000000] text-xl'>رغم أن كل تقنية تعمل بشكل مستقل، إلا أن الجمع بينهما يوفر مزيدًا من المرونة:</p>
                    <p className='text-[#000000] text-xl'>NFC أسرع وأسهل، لكنها لا تعمل مع جميع الهواتف (خاصة القديمة أو منخفضة التكلفة)</p>
                    <p className='text-[#000000] text-xl'>QR Code عالمي ولا يتطلب سوى كاميرا، لكنه أبطأ من NFC</p>
                    <p className='text-[#000000] text-xl'>دمجهما معًا يضمن وصول المعلومة للجميع، أيًا كان نوع الهاتف أو تفضيل المستخدم.</p>
                    <h2 className='text-[22px] font-semibold mt-8'>مستقبل التقنية</h2>
                    <p className='text-[#000000] text-xl'>من المتوقع أن تنتشر هذه الأدوات بشكل أوسع في الأعوام القادمة، خاصة مع زيادة الاعتماد على الهويات الرقمية والتواصل اللاورقي. وستكون الكروت والميداليات الذكية جزءًا لا يتجزأ من عالم الأعمال، التعليم، وحتى الحياة اليومية</p>
                </div>

                <div className="mt-[62px] flex flex-wrap gap-[21px]">
                    {BlogsSection.map((item,index) => (
                    <div
                        key={index}
                        className='relative w-[387px] h-[376px] border border-[#B2B2B2] rounded-md bg-[#F6F7FB]'
                    >
                        <div className='absolute top-4 right-4'>
                            <Bookmark />
                        </div>
                        <Image
                            src={item.image}
                            alt='big blog image'
                            width={387}
                            height={212}
                        />
                        <div className='flex items-center justify-between mt-4 px-4'>
                            <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                            <h2 className='text-[#787676] text-base font-normal'>{item.time}</h2>
                        </div>
                        <p className='text-[#8B8282] text-base mt-3 px-4'>{item.description}</p>
                        <p className='text-[#8B8282] text-base mt-3 px-4 justify-end flex'>{item.date}</p>
                    </div>
                ))}
                </div>
        </section>
    )
}

export default BlogDetails
