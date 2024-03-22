import React, {useState } from "react";
import { calculateResult } from "../commonFun";
import instance from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { addResultDetail } from "../../features/resultSlice";

export default function FormDesign2() {
  const themeSetting = useSelector((state) => state.theme.data.design);
  const dispatch = useDispatch();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [mobile,setMobile] = useState();
  const [gender,setGender] = useState();
  const [purpose,setPurpose] = useState();
  const [bodyWeight,setBodyWeight] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [place,setPlace] = useState('');
  const [cityList,setCityList] = useState([]);
  const [finalCityList, setFinalCityList] = useState([]);
  const [placemsg, setPlacemsg] = useState("");

  let apiUrl = process.env.REACT_APP_GEMTOOL_API_URL;
  const fetchLocation = async (e) => {
    let str = e.target.value.replace(/[^a-zA-Z\s]/g, "")
    let strArray = str.split(" ");
    setPlace(str);
    let lastIdx = strArray.length - 1;
    setPlacemsg("Enter Village, Block or City Name here");
    
    if(str.length === 0){
      setCityList([])
      setFinalCityList([])
      setPlacemsg("");
      return;
    }
    try {
      if (str.length >= 3 && strArray.length === 1) {
        setPlacemsg("Loading address details...");
        let res = await instance.get(
          `${apiUrl}/search/${strArray[0]}`
        );
        setCityList(res.data);
        setFinalCityList(res.data);
        setPlacemsg("");
        // Do something with the result 'res'
      }else{
        const filteredAddresses = cityList.filter(address => address.address.toLowerCase().includes(strArray[lastIdx].toLowerCase()));
        setFinalCityList(filteredAddresses);
        setPlacemsg("");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error during fetch:", error);
    }
  };


  const findGems = async(event) =>{
    event.preventDefault();
    // setIsOpen(true)
     let records = {
        id: Date.now(),
        name,
        email,
        mobile,
        gender,
        purpose,
        bodyWeight,
        date,
        time,
        place
      }
      
      let data = await calculateResult(event, records);
      
      dispatch(addResultDetail(data))
      let resultView = document.getElementById('resultView');
      resultView && resultView.scrollIntoView({behavior: 'smooth'});
      
  }

  return (
    <>
          <form
            className=" rounded-[10px] col-span-3 lg:col-span-2 w-auto bg-white/0 backdrop-blur-[2px] p-[25px] md:px-[80px] md:py-[0px] sm:p-[35px] relative my-[20px] sm:my-[50px]"
            onSubmit={findGems}
          >
            <div className="flex  items-center pb-[30px]">
              <img className="w-[80px] sm:w-[150px] rounded-[50%]" src="https://www.figma.com/file/oirTjXA2lj1adQiUhGg1tn/image/a72ce21712b5bac7c83afcf67ade9269561327cf" alt="moon"/>
              <div className="ms-[10px] sm:ms-[30px] flex flex-col justify-center">
                <h6 style={{color: themeSetting.title.color}} className="text-[18px] sm:text-[20px] lg:text-[32px] font-[400] sm:font-[500] leading-none">{themeSetting.title.enable && themeSetting.title.text}</h6>
                <h6 className="text-[14px] md:text-[20px] leading-none sm:pb-[20px] font-[500] font-libra mt-[8px] sm:mt-[10px]">Fill the form to get result:</h6>
              </div>
            </div>
            <div className="bg grid grid-cols-1 gap-x-[25px] gap-y-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="name"
                  className="block text-[14px] tracking-normal sm:text-[16px]  mb-[4px] font-inter font-[400]"
                >
                  Enter your name
                </label>
                <div className="">
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setName(e.target.value)} 
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="last-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your email
                </label>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    
                  />
                </div>
              </div>

              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="first-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your phone number
                </label>
                <div className="">
                  <input
                    placeholder="Enter your mobile"
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="given-name"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="last-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your gender
                </label>
                <div className="select-container">
                  <select
                    id="countries"
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="first-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Purpose to wear gemstone
                </label>
                <div className="select-container">
                  <select
                    id="countries"
                    className="block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setPurpose(e.target.value)}
                    required
                    
                  >
                    <option value="">Purpose</option>
                    <option value="general">General</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Education">Education</option>
                    <option value="Job and Career">Job and Career</option>
                    <option value="Health">Health</option>
                    <option value="Business">Business</option>
                    <option value="All relationship,Education, Job, Career, Health, Business">
                      All relationship,Education, Job, Career, Health, Business
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="last-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Body weight (in kg)
                </label>
                <div className="">
                  <input
                    placeholder="Enter your weight"
                    type="number"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setBodyWeight(e.target.value)}
                    required
                    
                  />
                </div>
              </div>

              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="first-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your birth date
                </label>
                <div className="w-full bg-white rounded-[40px]">
                  <input
                    type="date"
                    name="first-name"
                    id="first-name"
                    placeholder="Date"
                    autoComplete="given-name"
                    className="block w-[100%] min-h-[50px] rounded-[40px] bg-transparent border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setDate(e.target.value)}
                    required
                    
                  />
                </div>
              </div>

              <div>
                <label
                  style={{color: themeSetting.form.color}}
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your birth time
                </label>
                <div className="bg-white rounded-[40px]">
                  <input
                    autoComplete="given-name"
                    className="block w-[100%] min-h-[50px] rounded-[40px] bg-transparent border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    // className="block text-left w-full min-h-10 bg-transparent min-h-[50px] rounded-[40px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    // className="block text-left w-full min-h-10 bg-transparent rounded-lg border px-4 py-[1.3rem] sm:py-[1.7rem] text-[12px] sm:text-[14px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => setTime(e.target.value)}
                    required
                    id="appt-time"
                    type="time"
                    name="appt-time"
                    placeholder="Date"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  style={{color: themeSetting.form.color}}
                  htmlFor="first-name"
                  className="block text-[14px] tracking-normal sm:text-[16px] mb-[4px] font-inter font-[400]"
                >
                  Enter your birth place
                </label>
                  <input
                    placeholder="Enter birth place here"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    list="timeZonesValue"
                    className="block w-full min-h-[50px] rounded-[40px] bg-white border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] outline-none shadow-none font-inter font-[400]"
                    onChange={(e) => fetchLocation(e)}
                    required
                    value={place}
                  />
                  <div className="h-[30px]">
                    <span>{placemsg}</span>
                  </div>

                    <datalist id="timeZonesValue">
                      {finalCityList.map((listName,index) => {
                        return (
                          <option
                            key={index}
                            onClick={() => {
                              setPlace(listName.address);
                              setFinalCityList([]);
                            }}
                          >
                            {listName.address}
                          </option>
                        );
                      })}
                    </datalist>

              </div>

            </div>
            <div className=" mt-[40px] w-full md:w-[60%] mx-auto">
                <button
                    type="submit"
                    style={{backgroundColor: themeSetting.form.color}}
                    className="block w-full  min-h-[50px] rounded-[40px] px-4 py-[12px] sm:py-[12px] text-center text-[20px] font-[500] text-white opacity-[0.9] hover:opacity-[1]  duration-[.3s]"
                    >
                    Submit
                </button>
            </div>
          </form>
    </>
  );
}
