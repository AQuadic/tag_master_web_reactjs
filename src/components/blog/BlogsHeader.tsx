import React from 'react'
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslations } from 'next-intl';
const BlogsHeader = () => {
    const t = useTranslations("homeblogs");
    return (
        <div>
            <h1 className='text-[#000000] text-[25px] font-bold flex justify-center'>{t('blog')}</h1>  
                <div className="flex w-full flex-col gap-6 mt-10">
                    <Tabs defaultValue="account">
                        <TabsList className='border-b pb-14'>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="allBlogs">{t('all')}</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="advices">{t('advices')}</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="tools">{t('tools')}</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="stories">{t('stories')}</TabsTrigger>
                            <TabsTrigger className='w-32 lg:w-full md:w-40' value="directions">{t('direction')}</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
        </div>
    )
}

export default BlogsHeader
