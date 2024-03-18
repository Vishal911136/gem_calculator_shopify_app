import React from 'react'
import ResultTheme1 from './ResultTheme1'
import { useSelector } from 'react-redux';

export default function Result() {

    // const themeSetting = useSelector((state) => state.theme.data.data.design);
    const resultDetailData = useSelector((state) => state.resultDetail.data);
  return (
    <>
    {
        resultDetailData &&  resultDetailData.resultview === true ? 
        <ResultTheme1/>:''
        // <div className='w-full h-screen flex items-center justify-center'>
        //     <h6>Loading...</h6>
        // </div>
    }
    </>
  )
}
