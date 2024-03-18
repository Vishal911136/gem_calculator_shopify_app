import React from 'react'
import Products from './Products'
import { useSelector } from 'react-redux';

export default function ResultTheme1() {
    const themeSetting = useSelector((state) => state.theme.data.data.design);
    const resultDetailData = useSelector((state) => state.resultDetail.data);
    const resultDetail = resultDetailData.data;
    console.log(resultDetail)
  return (
    <>
        <div className='w-full bg-[#EAFFFC]'>
            <div className='w-[90%] sm:w-[80%] mx-auto grid lg:grid-cols-2 gap-4 py-[80px]'>
                <div className='flex flex-col'>
                {
                    themeSetting && themeSetting.resultbox.rashidetails &&
                    <div className='flex'>
                        <div className='flex flex-col items-center'>
                            <img className='w-[130px]' src='/Group.png' alt='Moon sign'/>
                            <div className='text-[#004563] mt-[10px]'>{resultDetail && resultDetail.rashi.rashi}</div>
                        </div>
                        <div className='ms-[15px] text-[20px] mt-[20px] sm:mt-[5px] sm:text-[30px] text-[#004563] '>
                            <div className='font-[700]'>Hello, {resultDetail && resultDetail.name}!</div>
                            <div className='leading-none'> Your Moon Sign is <b>{resultDetail && resultDetail.rashi.rashi}</b></div>
                        </div>
                    </div>
                }

                
                    <div style={{boxShadow: '0px 6px 27px -13px'}} className='bg-white border md:text-[18px] overflow-hidden text-[#004563] rounded-[30px] mt-[5%]'>
                        {
                            (themeSetting && themeSetting.resultbox.gems) && 
                            <div className='flex border-b sm:px-[40px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[600]'>Gems</div>
                                <div className='p-[15px] leading-none w-[70%]'><span className=''> {resultDetail && resultDetail.gems[0].name} </span>, is best for you</div>
                            </div>
                        }
                        {
                            (themeSetting && themeSetting.resultbox.bracelet) && 
                            <div className='flex border-b sm:px-[40px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[600]'>Bracelet</div>
                                <div className='p-[15px] leading-none w-[70%]'>{resultDetail && resultDetail.bracelet[0].name}, {resultDetail && resultDetail.bracelet[1].name} is best for you</div>
                            </div>
                        }
                        {
                            (themeSetting && themeSetting.resultbox.rudraksh) && 
                            <div className='flex sm:px-[40px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[600]'>Rudraksha</div>
                                <div className='p-[15px] leading-none w-[70%]'>{resultDetail && resultDetail.rudraksh[0].name}, is best for you</div>
                            </div>
                        }
                    </div>
                </div>
                
                {
                    themeSetting && themeSetting.resultbox.userinput &&
                    <div className=''>
                    <div style={{boxShadow: '0px 6px 27px -13px'}} className='bg-white md:text-[18px] border overflow-hidden text-[#004563] rounded-[30px]'>
                            <div className='flex p-[15px] border-b sm:px-[40px]'>
                                <div><span className='font-[500]'>Email - </span> {resultDetail && resultDetail.email} </div>
                            </div>
                            <div className='flex p-[15px] border-b sm:px-[40px]'>
                                <div><span className='font-[500]'>Phone - </span> {resultDetail && resultDetail.mobile} </div>
                            </div>
                            <div className='flex p-[15px] sm:px-[40px]'>
                                <div><span className='font-[500]'>Gender - </span>{resultDetail && resultDetail.gender} </div>
                            </div>
                        </div>

                        <div style={{boxShadow: '0px 6px 27px -13px'}} className='bg-white md:text-[18px] overflow-hidden border text-[#004563] rounded-[30px] mt-[20px]'>
                            <div className='flex p-[15px] border-b sm:px-[40px]'>
                                <div><span className='font-[500]'>Date of Birth - </span>{resultDetail && resultDetail.birth_date}</div>
                            </div>
                            <div className='flex p-[15px] border-b sm:px-[40px]'>
                                <div><span className='font-[500]'>Body Weight - </span>{resultDetail && resultDetail.body_weight}</div>
                            </div>
                            <div className='flex p-[15px] sm:px-[40px]'>
                                <div className='leading-none'><span className='font-[500]'>Birth Place - </span>{resultDetail && resultDetail.birth_place}</div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {
                themeSetting && themeSetting.resultbox.product &&
                <Products/>
            }
        </div>
    </>
  )
}
