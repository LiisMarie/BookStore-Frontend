import Api from "@/services/Api";

class AuthService {
  login(user) {
    return Api()
      .post("users/login", {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return Api().post("users/register", {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
