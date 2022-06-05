import axios from "../shared/plugins/axios";

export class ShopsService {
  getShops() {
    return axios.get("/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e/")
                .then(response => response.data)
                .catch(error => {
                  console.log(error);
                  throw error;
                })
  }
}

export default new ShopsService();