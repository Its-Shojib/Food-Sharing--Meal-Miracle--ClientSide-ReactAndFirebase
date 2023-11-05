import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'X-Custom-Header': 'foobar' },
    withCredentials: true ,
});
const useAxios = () => {
    return instance;
}
export default useAxios;