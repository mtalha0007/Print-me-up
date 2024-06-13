import { AuthRoutes } from "./auth.route";
import { post, get, put } from "../index";


const AuthServices = {
  login: async (obj) => {
    let result = post(AuthRoutes.login ,obj );
    return result;
  },

};

export default AuthServices;
