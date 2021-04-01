import axios from "axios";
import store from './store'

export async function signIn(url, email, senha) {
    const token = await axios.post(`${url}/login/`, {
        email,
        senha
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    if (Object.keys(token.data).includes("token") && token.data.success) {
        localStorage.setItem("token", token.data.token);
        localStorage.setItem("user", token.data.user);
        store.dispatch('get_usuario', `${url}/usuario/token/`);
        return token.data;
    } else {
        return token.data;
    }
}

export function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    store.dispatch('set_usuario', '');
}

export async function isSignedIn(url) {
    const token = localStorage.getItem("token");

    if (token) {
        try {
            let dados = await axios.get(`${url}/login/`, {
                headers: {
                    'x-access-token': token
                }
            });
            return dados.data.success;
        } catch (error) {
            if (error.statusCode == 403) return false;
        }
    } else {
        return false;
    }
}

export async function get_usuario(url) {
    const token = localStorage.getItem("token")

    let response = await axios.get(`${url}/usuario/token/`, {
        headers: {
            'x-access-token': token
        }
    });
    let data = response.data
    return data

}