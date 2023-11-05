import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    let authUtils = useContext(AuthContext);
    return authUtils;
}
export default useAuth;