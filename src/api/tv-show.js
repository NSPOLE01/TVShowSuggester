import axios from "axios"
import { BASE_URL, API_KEY } from "../config";
export class tvShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
        return response.data.results;


    }
    static async fetchReccomendations(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);
        return response.data.results;


    }

    static async fetchByTitle(title) {
        const response = await axios.get(
          `${BASE_URL}search/tv${API_KEY}&query=${title}`
        );
        return response.data.results;
      }
}