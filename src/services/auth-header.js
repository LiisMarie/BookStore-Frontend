export default function authHeader() {
  // check local storage for user item
  let user = JSON.parse(localStorage.getItem("user"));

  // if user item is present, return jwt token
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
