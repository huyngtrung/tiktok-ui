import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
});

export const get = async (api, options = {}) => {
    const reponse = await request.get(api, options);
    return reponse.data;
};

export default request;

// Local/ development.
// Test/ Staging.
// UAT.
// Production.