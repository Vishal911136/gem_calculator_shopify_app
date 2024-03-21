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
  
  const themeSetting = useSelector((state) => state.theme.data.design);
  const resultDetailData = useSelector((state) => state.resultDetail.data);
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
          {(themeSetting.theme === 2) && <img className='absolute top-0 left-0 w-full h-full object-cover' alt='background' src='https://s3-alpha-sig.figma.com/img/2c78/e57e/58f58349d9c7ed2f3c9c7aa9669b2764?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPqWAakM5pZYjCi6PxVp~0Uf-~sueXudeQmknj5CkY~D0~Xw-3QEDpkGBbX80ziKod9WEDtkE5Es286eUHT~HdZBPAwz8nKcPgkVXePbd6MwSKIJ6ZJ2ReSmJRKlDv-isDbuaYS~lNRPQXTW~M2HcLUIwf6H~dvj~9Xacbrbm2TsHm-ZGIdUC3mpsb7TcqjGT-SJ0229~-P6r7qrtJp2yE~u4isbmD7ivVVs9hwQnbylkprtw4tidED790gQqsXTn9ow9rz7bWTz8PGGRFwj572fvvgxlYKH4IL7B6oXJQET3rUVbTfcJ6JQs6AXQ-zMQpAUl0QyJcrpMI6qlPfVNQ__' />}
          {(themeSetting.theme === 3) && <img className='absolute top-0 left-0 w-full h-full object-cover' alt='background' src='/bg3.jpg' />}
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] w-[95%] mx-auto ${(themeSetting.tableimage.enable && themeSetting.theme === 1) ? 'md:grid-cols-3': 'md:grid-cols-1'} ${(themeSetting.tableimage.enable && themeSetting.theme === 3) ? 'my-0 mt-[30px]': 'my-[30px]'}`}>
              <Form/>
              {(themeSetting.theme === 1 && themeSetting.tableimage.enable === true) &&  <SideBanner/>}
            </div>
          </div>
          <Result/>
          {
              resultDetailData &&  resultDetailData.resultview === true ? 
              '':''
          }
        </div>
    </>
  );
}

export default App;
