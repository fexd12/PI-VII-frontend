import axios from 'axios'


export const request = {

    get: function(url){
        // this.$http.get()
        return axios.get(url)

    }

}