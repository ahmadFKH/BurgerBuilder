import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-project-react-7f411.firebaseio.com/'
})

export default instance;