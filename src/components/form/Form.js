import React from 'react'
import FormDesign1 from './FormDesign1'
import FormDesign2 from './FormDesign2'
import { useSelector } from 'react-redux';

export default function Form() {
  const themeSetting = useSelector((state) => state.theme.data.data.design);
  return (
    <>
    {themeSetting.theme === 1 && <FormDesign1/>}
    {themeSetting.theme === 2 && <FormDesign2/>}
    </>
  )
}
