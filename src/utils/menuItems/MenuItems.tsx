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
]

type UserTypes = {
    sup_admin?: string;
    sub_admin?: string;
    admin?: string;
};

export const userTypes: UserTypes = {
    sup_admin: "Sup Admin",
    sub_admin: "Sub Admin",
    admin: "Admin"
};
