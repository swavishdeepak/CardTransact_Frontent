// export let baseURL = process.env.REACT_APP_BASE_URL;
// let baseURL = `http://10.5.50.119:8000/api/`;
let baseURL = `http://192.168.0.108:8000/api/`;

const Apis = {
  baseURL,
  login: `${baseURL}/auth/login`,
  veryfyOtp: `${baseURL}/auth/verifyOTP`,
  AddEmployee: `${baseURL}/emp`,
  getEmployee: `${baseURL}/emp`,
  empUpdateById: `${baseURL}/emp/editRequestEmpById`,
  agent: baseURL + "agent",
  acquirer: `${baseURL}acquirer`,
  addApplication: `${baseURL}application`,
  getAppDetailById: `${baseURL}getApplicationById`,
  allApplications: `${baseURL}application`,
  reviewAppById: `${baseURL}reviewAppById`
};

export default Apis;
