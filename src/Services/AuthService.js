import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

  //----------------------------- register method --------------------------------------------
 async register(data) {
      const response = await axios
        .post(API_URL + "signup", {
            data
        });
      if (response.data.status === "200") {
        //localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
  }

  //----------------------------- login method --------------------------------------------
  async login(username, password) {
    const response = await axios
          .post(API_URL + "signin", {
              username,
              password
          });
      if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      }
      return response.data;
  }

    //----------------------------- logout method --------------------------------------------
  async logout() {
    const response = await axios
    .post(API_URL + "logout");
    if (response.data.status === 200) {
        localStorage.removeItem("token");
    }
  }

     //----------------------------- forgot password method --------------------------------------------
    async forgotPassword(email) {
      const response = await axios
      .post(API_URL + "forgot_passowrd");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

    //----------------------------- confirm code method --------------------------------------------
    async confirmCode(confirmation_code) {
      const response = await axios
      .post(API_URL + "confirm_code");
      if (response.data.status === 200) {
          //localStorage.removeItem("user");
      }
    }

  //----------------------------- confirm code method --------------------------------------------
  async updatePassword(password, condfirmPassword) {
    const response = await axios
    .post(API_URL + "update_password", {
      password,
      condfirmPassword
    });
    if (response.data.status === 200) {
        //localStorage.removeItem("user");
    }
  }  
    

    //----------------------------- get current user details method --------------------------------------------
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();