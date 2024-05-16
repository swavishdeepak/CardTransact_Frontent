

export let baseURL = process.env.REACT_APP_BASE_URL



const Apis = {
    baseURL,
    login: `${baseURL}/auth/login`,
    veryfyOtp: `${baseURL}/auth/verifyOTP`,
    AddEmployee: `${baseURL}/emp`,
    getEmployee:`${baseURL}/emp`,
    empUpdateById: `${baseURL}/emp/editRequestEmpById`

}

export default Apis 