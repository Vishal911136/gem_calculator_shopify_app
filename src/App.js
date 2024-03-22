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
  
  const themeSetting = useSelector((state) => state.theme && state.theme.data && state.theme.data.design);
  const resultDetailData = useSelector((state) => state.resultDetail && state.resultDetail.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchThemeSettings (process.env.REACT_APP_THEME_API_URL));
  }, [dispatch]);
  return (
    <>
        <div className=' mx-auto'>
         {themeSetting.header.enable && <Header/>}
          {(themeSetting.theme === 1 && themeSetting.title.enable === true) &&  <MainTitle/>}
          <div className='relative'>
          {(themeSetting.theme === 2) && <div className='absolute bg-[#d3c3b6] top-0 left-0 h-full w-full opacity-[.6]'></div>}
          {(themeSetting.theme === 3) && <img className='absolute top-0 left-0 w-full h-full object-cover' alt='background' src='/bg3.jpg' />}
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] w-[95%] mx-auto ${(themeSetting.tableimage.enable && themeSetting.theme === 1) ? 'md:grid-cols-3': 'md:grid-cols-1'} ${(themeSetting.tableimage.enable && themeSetting.theme === 3) ? 'my-0 mt-[30px]': 'my-[30px]'}`}>
              <Form/>
              {(themeSetting.theme === 1 && themeSetting.tableimage.enable === true) &&  <SideBanner/>}
            </div>
          </div>
          {
            resultDetailData &&  resultDetailData.resultview === true ? 
            <Result/>
              :''
          }
        </div>
    </>
  );
}

export default App;
