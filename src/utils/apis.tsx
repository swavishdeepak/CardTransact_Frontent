export let baseURL = process.env.REACT_APP_BASE_URL;

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
  getEmpDetailsById: `${baseURL}/emp/getEmpById`,
  deleteEmpReq: `${baseURL}/emp/deleteEmpRequestById`,
  deleteEmpById: `${baseURL}/emp/deleteEmpById`,
  editEmpReqApprovedRejectById: baseURL + "/emp/editEmpReqApproveRejectById",
  addEmpReqApproveRejectById: baseURL + "/emp/addEmpReqApproveRejectById",

  tier: `${baseURL}/tier`,
};

export default Apis;
