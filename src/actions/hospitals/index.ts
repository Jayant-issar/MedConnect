import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL

export async function getHospitals() {
    
    
    try {
        const response = await axios.get(`${API_URL}/hospital/all`);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.log("error in fetching all hospitals", error);
        return null;
    }
}