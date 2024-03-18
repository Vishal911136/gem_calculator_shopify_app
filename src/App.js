import './App.css';
import Form from './components/form/Form';
import SideBanner from './components/form/SideBanner';
import MainTitle from './components/MainTitle';
import Header from './components/Header';
import { useEffect } from 'react';
import { fetchThemeSettings } from './features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Result from './components/result/Result';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchThemeSettings (process.env.REACT_APP_THEME_API_URL));
  }, [dispatch]);
  
  const themeSetting = useSelector((state) => state.theme.data.data.design);
  console.log(themeSetting)
  return (
    <>
        <div className=' mx-auto'>
         {themeSetting.header.enable && <Header/>}
          {(themeSetting.theme === 1 && themeSetting.title.enable === true) &&  <MainTitle/>}
          <div className='relative'>
          {(themeSetting.theme !== 1) && <img className='opacity-[0.90] absolute top-0 left-0 w-full h-full object-cover' alt='background' src='https://s3-alpha-sig.figma.com/img/2c78/e57e/58f58349d9c7ed2f3c9c7aa9669b2764?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3IDotdc5JGAI5P3SwphOESHfwFWXDC8EwpmVnlmpo~jAqyYjzjGlMuGJ4GpfMbui8-8rHNrhIwFRiFnEgrhFAMGj6P6CI2KufF2VuJc-XhR~nFLOHWI95PbXIIKRcboJl2-9aSxYPTl4YQsbMVGMJ-qWzGg-kklOt7NhFqP0CF1XRWnWgQvY9dcaIzFH~opBKiMJz1M1gYnfipQxWCD2CFovaOkZK7MDYWiuHWyBFRMCa9HlfsBIgo89itGoBSSR5STTUmVdQmHIaRA7~XSYjvNMppSPbeYzdmXLiseviDt1wOmN7O9S07AH3g2wSsWCW98Sl4e1ehEQOBCyPkG2g__' />}
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] my-[30px] w-[95%] mx-auto ${(themeSetting.tableimage.enable && themeSetting.theme === 1) ? 'md:grid-cols-3': 'md:grid-cols-1'}`}>
              <Form/>
              {(themeSetting.theme === 1 && themeSetting.tableimage.enable === true) &&  <SideBanner/>}
            </div>
              <Result/>
          </div>
        </div>
    </>
  );
}

export default App;
