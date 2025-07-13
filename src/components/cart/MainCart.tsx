'use client';
import React from 'react';
import Image from 'next/image';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OtherProducts from './OtherProducts';
import { getCart } from '@/api/cart/getCart';
import EmptyState from '../general/EmptyState';
import { deleteCartItem } from '@/api/cart/deleteFromCart';
import { toast } from 'sonner';
import Spinner from '../icons/general/Spinner';
import Tracking from '../general/Tracking';
import { useLocale, useTranslations } from 'next-intl';
import { addToCart } from '@/api/cart/addToCart';
import { useCartStore } from '@/components/stores/cartStore';

const MainCart = () => {
  const t = useTranslations("maincart");
  const locale = useLocale();
  const { removeFromCart } = useCartStore();
const [couponInput, setCouponInput] = React.useState('');
const [appliedCoupon, setAppliedCoupon] = React.useState('');
const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cart', appliedCoupon],
    queryFn: () => getCart(appliedCoupon),
  });

  console.log("Cart data :",data)

  if (isLoading) return <div className='flex justify-center'><Spinner /></div>

  if (!data || data.items.length === 0) {
    return <div className='flex items-center justify-center'>
      <EmptyState />
    </div>;
  }

  const handleRemoveItem = async (
  cartItemId: number,
  itemableId: number,
  itemableType: string
) => {
  await removeFromCart(cartItemId, itemableId, itemableType, 0);
  await refetch();
};

const updateQuantity = async (cartItemId: number, newQuantity: number) => {
  if (newQuantity < 1) return;
  
  try {
    queryClient.setQueryData(['cart', appliedCoupon], (oldData: any) => {
      if (!oldData) return oldData;
      
      return {
        ...oldData,
        items: oldData.items.map((item: any) => 
          item.id === cartItemId 
            ? { ...item, quantity: newQuantity }
            : item
        )
      };
    });
    
    toast.success(t('updateQuantity'));
  } catch {
    toast.error("Failed to update quantity");
    queryClient.invalidateQueries({ queryKey: ['cart', appliedCoupon] });
  }
};

const handleIncreaseQuantity = async (
  itemable_type: string,
  itemable_id: number,
  currentQuantity: number
) => {
  try {
    await addToCart(itemable_type, itemable_id, currentQuantity + 1);
    await refetch();
    toast.success(t('quantityIncreased'));
  } catch (error) {
    toast.error("Failed to increase quantity");
    console.error(error);
  }
};


const handleDecreaseQuantity = async (
  cartItemId: number,
  itemableId: number,
  itemableType: string,
  currentQuantity: number
) => {
  try {
    await deleteCartItem(cartItemId, itemableId, itemableType, currentQuantity - 1);
    toast.success("Item quantity decreased");
    await refetch();
  } catch (error) {
    toast.error("Failed to decrease quantity");
    console.error(error);
  }
};

const totalItemsPrice = data.items.reduce((sum, item) => {
  const itemTotal = parseFloat(item.itemable.price) * item.quantity;
  return sum + itemTotal;
}, 0);


  return (
    <section className='container'>
      <Tracking />
      <div className="mt-[50px] flex lg:flex-row flex-col items-start justify-between gap-4">
        <div className='w-full'>
          {data.items.map((item, index) => (
            <div key={index} className="flex md:flex-row flex-col items-center gap-4 mt-4">
              <Image 
                className="w-[184px] h-[184px] rounded-md" 
                width={184} 
                height={184} 
                src={item.itemable.images?.[0]?.responsive_urls?.[0] || "/placeholder.png"}
                alt="cart image" 
              />
              <div className="xl:w-[535px] w-full lg:h-[184px] border border-[#D9D9D9] rounded-md py-4 px-8">
                <div className='flex items-center justify-between'>
                  <h2 className="text-[#000000] text-[21px] font-bold">{item.itemable.name?.[locale]}</h2>
                  <button
                    className='text-[#CB0306] text-base font-bold'
                    onClick={() => handleRemoveItem(item.id, item.itemable.id, item.itemable_type)}
                  >
                    {t('remove')}
                  </button>
                </div>
                <p className="text-[#464B4E] text-[17px] mt-2.5">{item.itemable.description?.[locale]}</p>
                <div className='flex items-center justify-between mt-6'>
                  <div className="flex items-center gap-4">
                    <p className='text-[#000000] text-base'>{item.itemable.price} </p>
                    {/* <div className="flex items-center">
                            <svg className="w-4 h-4 text-[#FFB74A] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                          <p className="ms-1 text-sm font-medium text-[#7B7E80]">(5)</p>
                      </div> */}
                  </div>
                  <div className='flex items-center gap-4'>
                    <button 
                      className='w-6 h-6 border-2 border-[#007EC1] text-[#007EC1] flex items-center justify-center hover:bg-[#007EC1] hover:text-white transition-colors'
                      onClick={() => handleIncreaseQuantity(item.itemable_type, item.itemable.id, item.quantity)}
                    >
                      +
                    </button>
                    <p className='text-[#000000] text-[22px] min-w-[30px] text-center'>{item.quantity}</p>
                    <button 
                      className='w-6 h-6 border-2 border-[#007EC1] text-[#007EC1] flex items-center justify-center hover:bg-[#007EC1] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => handleDecreaseQuantity(item.id, item.itemable.id, item.itemable_type, item.quantity) }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

            <div className='md:w-[400px] w-full h-full bg-[#FFFFFF] mt-4 rounded-[12px] py-[39px] px-[31px]' style={{boxShadow: ' 0px 1px 2px 0px #00000040'}}>
              <div className="flex w-full xl:max-w-sm flex-col gap-6">
                <Tabs defaultValue="total" dir='rtl'>
                  <TabsList>
                    <TabsTrigger value="address">{t('address')}</TabsTrigger>
                    <TabsTrigger value="total">{t('totalorder')}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="address">
                    <div className='mt-9'>
                      <div className='flex flex-col'>
                        <label htmlFor="country" className='text-[#000000] text-base'>{t('country')}</label>
                      <input 
                      type="text" 
                      name="country" 
                      id="country" 
                      className='md:w-[324px] w-full h-12 border border-[#4A4A4A] rounded-[8px] mt-2 px-3'
                      placeholder={t('uae')}
                      />
                      </div>

                      <div className='mt-[14px] flex flex-col'>
                        <label htmlFor="country" className='text-[#000000] text-base'>{t('city')}</label>
                        <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        className='md:w-[324px] w-full h-12 border border-[#4A4A4A] rounded-[8px] mt-2 px-3'
                        placeholder= {t('ajman')}
                        />
                      </div>

                      <div className='mt-[14px] flex flex-col'>
                        <label htmlFor="country" className='text-[#000000] text-base'>{t('address')}</label>
                        <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        className='md:w-[324px] w-full h-12 border border-[#4A4A4A] rounded-[8px] mt-2 px-3'
                        placeholder={t('addressDetails')}
                        />
                      </div>

                      <div className='mt-[14px] flex flex-col'>
                        <label htmlFor="country" className='text-[#000000] text-base'>{t('zipcode')}</label>
                        <input 
                        type="text" 
                        name="country" 
                        id="country" 
                        className='w-[155px] h-12 border border-[#4A4A4A] rounded-[8px] mt-2 px-3'
                        placeholder='11612'
                        />
                      </div>

                      <button className='w-full h-11 bg-[#007CC2] rounded-[8px] mt-7 text-[#FFFFFF] text-base'>
                        {t('continue')}
                      </button>
                    </div>
                  </TabsContent>
                  <TabsContent value="total">
                      <div className='mt-[11px]'>
                        <label htmlFor="code" className='text-[#000000] text-base'>{t('coupon')}</label>
                      <div className='relative'>
                        <div className='relative'>
                          <input type="text" className='xl:md:w-[324px] w-full h-12 rounded-[8px] border border-[#000000] focus:outline-none mt-2 px-2' />
                          <button className='w-[77px] h-[46px] bg-[#007EC1] rounded-[8px] text-[#FFFFFF] text-base font-medium absolute top-[9.4px] left-[1px]'>{t('apply')}</button>
                        </div>
                      </div>
                      </div>

                      <div className='mt-[28px]'>
                        <h2 className='text-[#000000] text-base font-medium'>{t('totalcost')}</h2>
                        
                        {data.items.map((item, index) => (
                          <div key={index} className='text-[#000000] text-base flex items-center justify-between mt-4'>
                            <h3>
                              {item.itemable.name?.ar.length > 10
                                  ? item.itemable.name?.[locale].slice(0, 20) + '...'
                                  : item.itemable.name?.[locale]}
                              </h3>

                            <p>{item.itemable.price}</p>
                          </div>
                        ))}

                      <div className='text-[#000000] text-base flex items-center justify-between mt-4'>
                          <h3>{t('delivery')}</h3>
                          <p>{data.delivery_fees}</p>
                        </div>

                        <div className='text-[#000000] text-base flex items-center justify-between mt-4'>
                          <h3>{t('coupon')}</h3>
                          <p>{data.discount} درهم</p>
                        </div>

                      </div>

                      <hr className='mt-7'/>
                      <div className='text-base font-bold flex items-center justify-between mt-4'>
                        <h3 className='text-[#000000]'>{t('total')}</h3>
                        <p className='text-[#15B600]'>
                          {(totalItemsPrice + parseFloat(data.delivery_fees || 0) - parseFloat(data.discount || 0)).toFixed(2)}
                        </p>
                      </div>

                      <div className='flex items-center justify-center'>
                        <button className='xl:w-[280px] w-full h-11 bg-[#007CC2] rounded-[8px] mt-4 text-[#FFFFFF] text-base'>{t('payNow')}</button>
                      </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <OtherProducts />
        </section>
    )
}

export default MainCart

