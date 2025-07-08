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
                <div className="flex flex-wrap flex-col gap-6 mt-10">
                    <Tabs defaultValue="account">
                        <TabsList className='border-b pb-14'>
                            <TabsTrigger className='w-44 lg:w-full md:w-52' value="allBlogs">{t('all')}</TabsTrigger>
                            <TabsTrigger className='w-44 lg:w-full md:w-52' value="advices">{t('advices')}</TabsTrigger>
                            <TabsTrigger className='w-44 lg:w-full md:w-52' value="tools">{t('tools')}</TabsTrigger>
                            <TabsTrigger className='w-44 lg:w-full md:w-52' value="stories">{t('stories')}</TabsTrigger>
                            <TabsTrigger className='w-44 lg:w-full md:w-52' value="directions">{t('direction')}</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
        </div>
    )
}

export default BlogsHeader
