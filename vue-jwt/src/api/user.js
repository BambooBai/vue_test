import axios from '../libs/ajaxRequest'

//放置接口
export const getUser=()=>{
  return  axios.request({
        url:'/user',
        method:'get'
    })
}

export const login=(username)=>{
    return axios.request({
        method:'post',
        url:'/login',
        data:{
            username
        }
    })
}

export const validate=(username)=>{
    return axios.request({
        method:'get',
        url:'/validate',
        data:{
            username
        }
    })
}

