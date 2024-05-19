export const ChenkBoxLables = [
  { label: "Merchant Legal Name", value: "Merchant Legal Name" },
  { label: "Merchant Trading Name", value: "Merchant Trading Name" },
  { label: "Mobile Number", value: "Mobile Number" },
  { label: "Email Address", value: "Email Address" },
  { label: "House/Flat Address", value: "House/Flat Address" },
  { label: "City", value: "City" },
  { label: "County", value: "County" },
  { label: "Country", value: "Country" },
  { label: "Post Code", value: "Post Code" },
  { label: "Address Proof", value: "Address Proof" },
  { label: "Name of Bank", value: "Name of Bank" },
  { label: "Name on Bank AC.", value: "Name on Bank AC." },
  { label: "Account No.", value: "Account No." },
  { label: "Sort Code", value: "Sort Code" },
  { label: "SalesPerson Name", value: "SalesPerson Name" },
  { label: "Company/Individual", value: "Company/Individual" },
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



export const empStatusColorObj = {
  approved: '#77D177',
  rejected: '#C10404',
  new: '#03AED2',
}

type UserTypes = {
  sup_admin?: string;
  sub_admin?: string;
  admin?: string;
};

export const userTypes: UserTypes = {
  sup_admin: "Sup Admin",
  sub_admin: "Sub Admin",
  admin: "Admin",
};
