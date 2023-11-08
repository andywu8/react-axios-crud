import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  create(data) {
    console.log("data in user service", data);
    return http.post("/users", data);
  }


}
export default new UserDataService();