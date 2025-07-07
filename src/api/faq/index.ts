import { axios } from '@/lib/axios'

export const getFAQs = async () => {
    try {
        const response = await axios.get('/faqs')
        return Array.isArray(response.data) ? response.data : []
    } catch (error) {
        console.error('Failed to fetch FAQs:', error)
        return []
    }
}
