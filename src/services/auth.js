import axios from "axios";

export async function SignInRequest(data) {
  let token;
  let user;

  await axios
    .post("http://localhost:5000/sign-in", data)
    .then((ans) => {
      token = ans.data.token;
      user = recoverUserInfo(token);
    })
    .catch((err) => {
      console.log(err.response.data);
      return null;
    });

  return { token, user };
}

export async function recoverUserInfo(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(config);

  let userInfo;

  await axios
    .get("http://localhost:5000/userInfo", config)
    .then((ans) => {
      console.log(ans.data);
      userInfo = ans.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return;
    });

  return userInfo;
}
