import axios from "axios";

const instance = axios.create({
    baseURL: 'https://food-sharing-server-ashy.vercel.app',
    headers: { 'X-Custom-Header': 'foobar' },
    withCredentials: true,
});
const useAxios = () => {
    return instance;
}
export default useAxios;