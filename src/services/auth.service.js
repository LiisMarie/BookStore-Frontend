import Api from "@/services/Api";

class AuthService {
  login(user) {
    return Api()
      .post("users/login", {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch(err => console.log(err));
  }

  logout() {
    Api(true)
      .post("users/logout/" + JSON.parse(localStorage.getItem("user")).username)
      .catch(err => console.log(err));
    localStorage.removeItem("user");
  }

  register(user) {
    return Api()
      .post("users/register", {
        username: user.username,
        email: user.email,
        password: user.password
      })
      .catch(err => console.log(err));
  }
}

export default new AuthService();
