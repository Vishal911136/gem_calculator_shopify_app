import React from 'react'
import { useSelector } from 'react-redux';

export default function MainTitle() {
  const themeSetting = useSelector((state) => state.theme.data.data.design);

  return (
    <div className='sm:w-[90%] md:w-[80%] my-[30px] w-[95%] mx-auto'>
        <h4 className='text-center py-[40px] text-[20px] sm:text-[40px] font-[600] leading-none'>{themeSetting.title.text}</h4>
    </div>
  )
}
