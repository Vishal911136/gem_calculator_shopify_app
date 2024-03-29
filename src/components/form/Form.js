import React from 'react'
import FormDesign1 from './FormDesign1'
import FormDesign2 from './FormDesign2'
import { useSelector } from 'react-redux';
import FormDesign3 from './FormDesign3';

export default function Form() {
      const themeSetting = useSelector((state) => state.theme.data.design);
  return (
    <>
      {themeSetting && themeSetting.theme === 1 && <FormDesign1/>}
      {themeSetting && themeSetting.theme === 2 && <FormDesign2/>}
      {themeSetting && themeSetting.theme === 3 && <FormDesign3/>}
    </>
  )
}
