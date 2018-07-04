import axios from 'axios'
import router from '../../router/index'

axios.interceptors.request.use(req => {
    let token = localStorage.getItem('token');
    console.log(token)

    if(token != null) {
        req.headers.Authorization = 'Bearer ${token}';
        console.log('entrei no if token != null')
    }

    return req;
})

axios.interceptors.response.use(res => {
    return res;
    console.log('entrei no response.use')
}), err => {
    console.log('entrei no err')
    if(err.response.status == 401){
        router.push('/login')
    }
}