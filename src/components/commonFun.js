import instance from "../axiosConfig";

export let calculateResult = async(e,records) =>{

    const formDataPre = {
        date: records.date+" "+records.time+":00",
        timezone: "Asia/kolkata",
        name: records.name,
        address: records.place,
        mobile: records.mobile,
        email: records.email,
        gender: records.gender,
        purpose: records.purpose,
        birth_date: records.date,
        birth_time: records.time,
        body_weight: records.bodyWeight,
        birth_place: records.place,
      };
    try {
        // Use the axios instance to make requests
        const response = await instance.post("/moonsign/calculateMoonsign",formDataPre); // The URL will be resolved relative to the baseURL
        if(response.data.gems){
            const data = {
                resultview:true,
                data:response.data
            };
            return data
        }
      } catch (error) {
        //   setError(error);
      } finally {
        //   setLoading(false);
      }
}


