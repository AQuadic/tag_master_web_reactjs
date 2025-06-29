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
                        <TabsList className='border-b pb-5'>
                            <TabsTrigger value="allBlogs">كل المقالات</TabsTrigger>
                            <TabsTrigger value="advices">نصائح التشبيك</TabsTrigger>
                            <TabsTrigger value="tools">أدوات للتشبيك الفعّال</TabsTrigger>
                            <TabsTrigger value="stories">قصص نجاح في التشبيك</TabsTrigger>
                            <TabsTrigger value="directions">أحدث الاتجاهات في التشبيك</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
        </div>
    )
}

export default BlogsHeader
