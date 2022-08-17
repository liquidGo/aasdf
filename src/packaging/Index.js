import axios from 'axios'
import '../style/loading.less'
export default {
    Ajax(url, data) {
        let ajaxLoading = document.getElementById('ajaxLoading')
        ajaxLoading.style.display = 'block'
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    ajaxLoading.style.display = 'none'
                    return resolve(res)
                })
                .catch(err => {
                    ajaxLoading.style.display = 'none'
                    return reject(err)
                })
        })
    }
}