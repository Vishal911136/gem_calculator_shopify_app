import React, { useEffect } from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
// import { getMoonSignSvg } from '../commonFun';

export default function ResultTheme3() {
  const themeSetting = useSelector((state) => state.theme.data.design);
  const resultDetailData = useSelector((state) => state.resultDetail.data);
  const resultDetail = resultDetailData.data;

  // const [moonSignImg, setMoonSignSvg] = useState('');
  console.log(resultDetail);

  useEffect(() => {
    // let moonSignName = resultDetail.rashi.rashi;
    // let signColor = themeSetting && themeSetting.form.color;
    // let moonSign = getMoonSignSvg(moonSignName,signColor)
    // setMoonSignSvg(moonSign)
  }, [resultDetail, themeSetting]);
  return (
    <>
      <div className="w-full bg-[#F4F2F5]" id="resultView">
        <div className="w-[90%] sm:w-[80%] mx-auto py-[80px]">
          <div className="">
            <div className="flex lg:flex-row flex-col gap-[30px]">
              <div
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  color: themeSetting && themeSetting.form.color,
                }}
                className="bg-white text-[14px] md:text-[18px] border overflow-hidden text-[#004563] rounded-[2px] lg:w-[40%] order-2 lg:order-1"
              >
                <div className="flex p-[15px] border-b sm:px-[40px]">
                  <div>
                    <span className="font-[500] font-inter">Email - </span>{" "}
                    {resultDetail && resultDetail.email}{" "}
                  </div>
                </div>
                <div className="flex p-[15px] border-b sm:px-[40px]">
                  <div>
                    <span className="font-[500] font-inter">Phone - </span>{" "}
                    {resultDetail && resultDetail.mobile}{" "}
                  </div>
                </div>
                <div className="flex p-[15px] sm:px-[40px]">
                  <div>
                    <span className="font-[500] font-inter">Gender - </span>
                    {resultDetail && resultDetail.gender}{" "}
                  </div>
                </div>
              </div>
              {themeSetting && themeSetting.resultbox.rashidetails && (
                <div className="flex lg:order-2">
                  <div className="flex flex-col items-center justify-between lg:ms-[30px]">
                    <img
                      className="w-[100px] sm:w-[130px]"
                      src="/Group.png"
                      alt="Moon sign"
                    />
                    {/* <svg className='p-0'>
                                    {moonSignImg}
                                </svg> */}
                    <div
                      style={{ color: themeSetting && themeSetting.form.color }}
                      className="text-[#151e44] mt-[10px]"
                    >
                      {resultDetail && resultDetail.rashi.rashi}
                    </div>
                  </div>
                  <div
                    style={{ color: themeSetting && themeSetting.form.color }}
                    className="ms-[15px] text-[20px] mt-[10px] sm:mt-[5px] sm:text-[30px] text-[#004563]"
                  >
                    <div className="font-[700] font-libre-baskerville">
                      Hello, {resultDetail && resultDetail.name}!
                    </div>
                    <div className="leading-none font-libre-baskerville font-[400]">
                      {" "}
                      Your Moon Sign is{" "}
                      <b>{resultDetail && resultDetail.rashi.rashi}</b>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex lg:flex-row flex-col gap-[30px] mt-[30px] lg:mt-[60px] ">
              <div
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  color: themeSetting && themeSetting.form.color,
                }}
                className="bg-white border text-[14px] md:text-[18px] overflow-hidden text-[#004563] rounded-[2px] lg:w-[50%] order-2 lg:order-1"
              >
                {themeSetting && themeSetting.resultbox.gems && (
                  <div className="flex border-b sm:px-[40px]">
                    <div className="p-[15px] border-r w-[30%] overflow-hidden font-[700] font-libre-baskerville">
                      Gems
                    </div>
                    <div className="p-[15px] leading-none w-[70%] font-inter font-[400]">
                      <span className="">
                        {" "}
                        {resultDetail && resultDetail.gems[0].name}{" "}
                      </span>
                      , is best for you
                    </div>
                  </div>
                )}
                {themeSetting && themeSetting.resultbox.bracelet && (
                  <div className="flex border-b sm:px-[40px]">
                    <div className="p-[15px] border-r w-[30%] overflow-hidden font-[700] font-libre-baskerville">
                      Bracelet
                    </div>
                    <div className="p-[15px] leading-none w-[70%] font-inter font-[400]">
                      {resultDetail && resultDetail.bracelet[0].name},{" "}
                      {resultDetail && resultDetail.bracelet[1].name} is best
                      for you
                    </div>
                  </div>
                )}
                {themeSetting && themeSetting.resultbox.rudraksh && (
                  <div className="flex sm:px-[40px]">
                    <div className="p-[15px] border-r w-[30%] overflow-hidden font-[700] font-libre-baskerville">
                      Rudraksha
                    </div>
                    <div className="p-[15px] leading-none w-[70%] font-inter font-[400]">
                      {resultDetail && resultDetail.rudraksh[0].name}, is best
                      for you
                    </div>
                  </div>
                )}
              </div>
              {themeSetting && themeSetting.resultbox.userinput && (
                <div
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    color: themeSetting && themeSetting.form.color,
                  }}
                  className="bg-white text-[14px] md:text-[18px] overflow-hidden border text-[#004563] rounded-[2px] lg:w-[50%] order-1"
                >
                  <div className="flex p-[15px] border-b sm:px-[40px]">
                    <div>
                      <span className="font-[500] font-inter">
                        Date of Birth -{" "}
                      </span>
                      {resultDetail && resultDetail.birth_date}
                    </div>
                  </div>
                  <div className="flex p-[15px] border-b sm:px-[40px]">
                    <div>
                      <span className="font-[500] font-inter">
                        Body Weight -{" "}
                      </span>
                      {resultDetail && resultDetail.body_weight}
                    </div>
                  </div>
                  <div className="flex p-[15px] sm:px-[40px]">
                    <div className="leading-none">
                      <span className="font-[500] font-inter">
                        Birth Place -{" "}
                      </span>
                      {resultDetail && resultDetail.birth_place}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {themeSetting && themeSetting.resultbox.product && <Products />}
        </div>
      </div>
    </>
  );
}
