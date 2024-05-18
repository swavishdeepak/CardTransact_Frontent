import React, { useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import CustomTextInput from "../CustomInput";
import { LoadButton } from "../LoadButton";
import { Box} from "@mui/material";
import { toast } from "react-toastify";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { useNavigate } from "react-router-dom";

interface EmpDeleteProps {
  setOpenDeleteReq: React.Dispatch<boolean>;
  empId?: any;
}

const EmpDeleteReq: React.FC<EmpDeleteProps> = ({
  setOpenDeleteReq,
  empId,
}) => {
  const [deleteRequestRemark, setDeleteRequestRemark] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleCloseRequest = () => {
    setOpenDeleteReq(false);
  };

  const handleDelete = async () => {
    try {
      setLoading(true)
      const { data } = await API_AXIOS.post(`${Apis.deleteEmpReq}/${empId}`, {
        deleteRequestRemark,
      });
      console.log("data", data);
      toast.success(data?.message);
      handleCloseRequest()
      navigate("/viewEmployees")
      
    } catch (err: any) {
      toast.error(err);
    }
    setLoading(false)
  };

  return (
    <>
      <CustomBox style={{ marginTop: "2rem", border: "1px solid #77D177" }}>
        <CustomTextInput
          label="Remarks"
          rows={4}
          placeholder="Tyle Here..."
          multiline={true}
          value={deleteRequestRemark}
          onChange={(e) => setDeleteRequestRemark(e.target.value)}
        />
      </CustomBox>
      <Box sx={{ display: "flex", gap: 3 }}>
        <LoadButton
          onClick={handleDelete}
          style={{
            marginTop: "2rem",
            width: "100%",
          }}
          loading={loading}
        >
          Delete
        </LoadButton>
        <LoadButton
          onClick={handleCloseRequest}
          hoverColor="#C10404"
          style={{
            background: "#C10404",
            marginTop: "2rem",
            width: "100%",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          Cancel
        </LoadButton>
      </Box>
    </>
  );
};
export default EmpDeleteReq;
