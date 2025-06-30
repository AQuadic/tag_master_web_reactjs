import React from 'react'
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
const BlogsHeader = () => {
    return (
        <div>
            <h1 className='text-[#000000] text-[25px] font-bold flex justify-center'>المدونة</h1>  
                <div className="flex w-full flex-col gap-6 mt-10">
                    <Tabs defaultValue="account" dir='rtl'>
                        <TabsList className='border-b pb-14'>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="allBlogs">كل المقالات</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="advices">نصائح التشبيك</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="tools">أدوات للتشبيك الفعّال</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="stories">قصص نجاح في التشبيك</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="directions">أحدث الاتجاهات في التشبيك</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
        </div>
    )
}

export default BlogsHeader
