import React from 'react'
import ResultTheme1 from './ResultTheme1'
import { useSelector } from 'react-redux';
import ResultTheme2 from './ResultTheme2';

export default function Result() {

    const themeSetting = useSelector((state) => state.theme.data.design);
    const resultDetailData = useSelector((state) => state.resultDetail.data);
  return (
    <>
    { themeSetting.theme === 1 && <ResultTheme1/>}
    { themeSetting.theme === 2 && <ResultTheme2/>}
    </>
  )
}
