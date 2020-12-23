export default function authHeader() {
  // check local storage for user item
  let user = JSON.parse(localStorage.getItem("user"));

  // if user item is present, return jwt token
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
