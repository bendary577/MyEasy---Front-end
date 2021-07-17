import { authenticatedAxiosInstance } from "./axios";
import { GET_USER_INFO } from "../APIs/user";

class UserService {

    //----------------------------- register method --------------------------------------------
    getUserInfo = async () => {
        const response = await authenticatedAxiosInstance.get(GET_USER_INFO);
        if (response.status === 200) {
            return response;
        }else{
        }
    }
    
}

export default new UserService();