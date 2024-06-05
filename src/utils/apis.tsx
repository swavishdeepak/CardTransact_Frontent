//export let baseURL = process.env.REACT_APP_BASE_URL;
//  let baseURL = `http://10.5.50.119:8000/api`;
// let baseURL = `http://192.168.0.108:8000/api`;
let baseURL = `http://localhost:8000/api`

const Apis = {
  baseURL,
  login: `${baseURL}/auth/login`,
  veryfyOtp: `${baseURL}/auth/verifyOTP`,
  AddEmployee: `${baseURL}/emp`,
  getEmployee: `${baseURL}/emp`,
  empUpdateById: `${baseURL}/emp/editRequestEmpById`,
  agent: baseURL + "/agent",
  agentDetailsById: baseURL + "/getAgentById",
  addAgentReqApproveRejectById: `${baseURL}/addAgentReqApproveRejectById`,
  editRequestAgentById: baseURL + "/editRequestAgentById",
  editAgentReqApproveRejectById: baseURL + "/editAgentReqApproveRejectById",
  deleteAgentById: `${baseURL}/deleteAgentById`,
  deleteAgentRequestById: `${baseURL}/deleteAgentRequestById`,
  getEmpDetailsById: `${baseURL}/emp/getEmpById`,
  deleteEmpReq: `${baseURL}/emp/deleteEmpRequestById`,
  deleteEmpById: `${baseURL}/emp/deleteEmpById`,
  editEmpReqApprovedRejectById: baseURL + "/emp/editEmpReqApproveRejectById",
  addEmpReqApproveRejectById: baseURL + "/emp/addEmpReqApproveRejectById",

  tier: `${baseURL}/tier`,
  acquirer: `${baseURL}/acquirer`,
  addApplication: `${baseURL}/application`,
  getAppDetailById: `${baseURL}/getApplicationById`,
  allApplications: `${baseURL}/application`,
  reviewAppById: `${baseURL}/reviewAppById`,
  getModelsByAcquirer: `${baseURL}/comStruct/getModelsByAcquirer`,
  getOptionsByModel: `${baseURL}/comStruct/getOptionsByModel`,
  forwardedAppById: `${baseURL}/forwardedAppById`,
  ProfileImgUpload: `${baseURL}/profilePicture`,
  EmpProfileImgUpload: `${baseURL}/emp/profilePicture`
};

export default Apis;
