import { axiosInstance } from "./axios";
import { REGISTER_API, LOGIN_API, LOGOUT_APU } from "../APIs/authentication";

class AuthService {

  //----------------------------- register method --------------------------------------------
  async register(data) {
      const response = await axiosInstance.post(REGISTER_API,data);
      if (response.status === 200) {
        return response.data;
      }
  }

  //----------------------------- login method --------------------------------------------
  async login(data) {
      const response = await axiosInstance.post(LOGIN_API,data);
      if (response.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          return response.data;
      }else{

      }
  }

  //----------------------------- logout method --------------------------------------------
  async logout() {
    const response = await axiosInstance.post(LOGOUT_APU);
    if (response.status === 200) {
        localStorage.removeItem("token");
    }
  }

  /*
     //----------------------------- forgot password method --------------------------------------------
    async forgotPassword(email) {
      const response = await axiosInstance
      .post(API_URL + "forgot_passowrd");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

    //----------------------------- confirm code method --------------------------------------------
    async confirmCode(confirmation_code) {
      const response = await axiosInstance
      .post(API_URL + "confirm_code");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

  //----------------------------- confirm code method --------------------------------------------
  async updatePassword(password, condfirmPassword) {
    const response = await axiosInstance
    .post(API_URL + "update_password", {
      password,
      condfirmPassword
    });
    if (response.data.status === 200) {
        //localStorage.removeItem("user");
    }
  } 
  */ 
    
}

export default new AuthService();