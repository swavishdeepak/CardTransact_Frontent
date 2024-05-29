import axios from "axios";
import { API_AXIOS } from "../../../http/interceptor";
import Apis from "../../../utils/apis";
import { toast } from "react-toastify";

let cloudName = process.env.REACT_APP_CLOUD_NAME;
let url = process.env.REACT_APP_CLOUDINARY_POST_URL;

export const uploadImageToCloudinary = async (file: any, userId: any, userRole: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "uploadpresest");
  formData.append("cloud_name", cloudName);

  try {
    const response = await axios.post(url, formData);
    let profilePictureUrl = response.data.secure_url;
    try {
      if (userRole === "agent") {
        const { data } = await API_AXIOS.put(
          `${Apis.ProfileImgUpload}/${userId}`,
          {
            profilePictureUrl,
          }
        );
        toast.success(data?.message);
        return data;
      } else if(userRole === "admin") {
        const { data } = await API_AXIOS.put(
          `${Apis.EmpProfileImgUpload}/${userId}`,
          {
            profilePictureUrl,
          }
        );
        toast.success(data?.message);
        return data;
      }
    } catch (err) {
      console.error("Error uploading profile picture URL to server", err);
      throw err;
    }
  } catch (error) {
    toast.error(error.response?.data);
    console.log("err", error.toString());
    console.error("Error uploading image to Cloudinary", error);
    throw error;
  }
};
