export const ChenkBoxLables = [
  { label: "Merchant Legal Name", value: "legalName" },
  { label: "Merchant Trading Name", value: "tradingName" },
  { label: "Mobile Number", value: "phoneNumber" },
  { label: "Email Address", value: "email" },
  { label: "House/Flat Address", value: "address1" },
  { label: "City", value: "city" },
  { label: "County", value: "county" },
  { label: "Country", value: "country" },
  { label: "Post Code", value: "postalCode" },
  // { label: "Address Proof", value: "Address Proof" },
  { label: "Name of Bank", value: "bankName" },
  { label: "Name on Bank AC.", value: "nameOnBankAcc" },
  { label: "Account No.", value: "accountNumber" },
  { label: "Sort Code", value: "sourceCode" },
  // { label: "SalesPerson Name", value: "SalesPerson Name" },
  // { label: "Company/Individual", value: "Company/Individual" },
];

export const salesType = {
  company: "Company",
  individual: "Individual",
};

export const srManagers = [
  { value: "pravanshu", label: "Pravanshu" },
  { value: "shayamal", label: "Shayamal" },
];

export const srManagersObj = {
  pravanshu: "Pravanshu",
  shayamal: "Shayamal",
}

export const agentStatusObj = {
  new: "New",
  approved: "Approved",
  rejected: "Rejected",
}

export const restrcitEdit = ["draft", "review"]
    




export const userStatusColorObj = {
  approved: '#77D177',
  rejected: '#C10404',
  new: '#03AED2',
}

export const empStatusObj = {
  new: "New",
  approved: "Approved",
  rejected: "Rejected",
}

export const statusObj = {
  new: "New",
  draft: "Draft",
  review: "Review",
  approved: "Approved",
  rejected: "Rejected",
  forwarded: "Forwarded"
}

export const statusObjColor = {
  approved: '#77D177',
  rejected: '#C10404',
  new: '#2F2F2E',
  review: "#03588D",
  forwarded: "#C4C737"
}





export const empStatusColorObj = {
  approved: '#77D177',
  rejected: '#C10404',
  new: '#03AED2',
}

type UserTypes = {
  sup_admin?: string;
  sub_admin?: string;
  admin?: string;
  agent?: string;
};

export const userTypes: UserTypes = {
  sup_admin: "Sup Admin",
  sub_admin: "Sub Admin",
  admin: "Admin",
  agent: "Agent"
};
