import axios from "axios";


//--------------------------------------- create axios instance -------------------------------
//axios instance to send unauthenticated requests
export const axiosInstance = axios.create({
    //withCredentials: true
})

//axios instance to send authenticated requests
export const authenticatedAxiosInstance = axios.create({
    //withCredentials: true
})


//--------------------------------------- axios request interceptors -------------------------------
authenticatedAxiosInstance.interceptors.request.use(async (req) => {
    let token = await localStorage.getItem('token');
    console.log("user infooooooooooooooooooooooooooo " + token);
    req.headers.authorization = `Bearer ${token}`;
    return req;
});

axiosInstance.interceptors.request.use(async (req) => {
    return req;
});

//--------------------------------------- axios response interceptors -------------------------------
axiosInstance.interceptors.response.use( undefined , function (error) {
    return error.response;
});
  
authenticatedAxiosInstance.interceptors.response.use(undefined, function (error) {
    const {status, data, config } = error.response;
    return error.response;
});