import axios from "axios";

class ApiService {

    getcards(){
        return axios.get("https://63867664d9b24b1be3d8d45a.mockapi.io/data/data")
    }


}

export default new ApiService();