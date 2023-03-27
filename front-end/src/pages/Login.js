import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../recoil/user";

import LoadingPage from "../components/LoadingPage";
import { BACKEND_URL } from "../config";

const Login = () => {
  const [cookies, setCookies] = useCookies(["access-token"]);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log(cookies["access-token"]);
    
    axios
      .get(`${BACKEND_URL}auth/user`, {
        headers: {
          "Content-Type": "application/json",
          accessToken: cookies["access-token"],
        },
      })
      .then(function (response) {
        console.log(response.data);
        // setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <LoadingPage></LoadingPage>
    </div>
  );
};

export default Login;
