import axios from 'axios'


export const request = {

    get: function(url){
        return axios.get(url)

    }

}