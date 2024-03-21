import React from 'react'
import ResultTheme1 from './ResultTheme1'
import { useSelector } from 'react-redux';
import ResultTheme2 from './ResultTheme2';
import ResultTheme3 from './ResultTheme3';

export default function Result() {

    const themeSetting = useSelector((state) => state.theme.data.design);
  return (
    <>
    { themeSetting && themeSetting.theme === 1 && <ResultTheme1/>}
    { themeSetting && themeSetting.theme === 2 && <ResultTheme2/>}
    { themeSetting && themeSetting.theme === 3 && <ResultTheme3/>}
    </>
  )
}
