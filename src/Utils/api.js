import axios from "axios";


export const handleLogin = async (API, payload) => {
    try {
        const res = await axios.post(API, payload);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
};
