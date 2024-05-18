import React, { useState } from "react";
import { Box} from "@mui/material";
import CustomButton from "../CustomButton";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { toast } from "react-toastify";
import { LoadButton } from "../LoadButton";
import { useNavigate } from "react-router-dom";


interface EmpDeleteProps {
  setOpenDelete: React.Dispatch<boolean>;
  empId?: any
}

const EmpDelete: React.FC<EmpDeleteProps> = ({ setOpenDelete,empId }) => {
  const handleDelClose = () => {
    setOpenDelete(false);
  };
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleDelete = async () => {
    try {
      setLoading(true)
      const { data } = await API_AXIOS.delete(`${Apis.deleteEmpById}/${empId}`
        
      );
      toast.success(data?.message);
      handleDelClose()
      navigate("/viewEmployees")
    } catch (err: any) {
      toast.error(err);
    }
    setLoading(false)
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <LoadButton
          onClick={handleDelete}
          hoverColor="#C10404"
          style={{
            backgroundColor: "#C10404",
            color: "#fff",
            borderRadius: "10px",
          }}
          loading={loading}
        >
           Yes
        </LoadButton>
        <CustomButton
          label="No"
          onClick={handleDelClose}
          hoverColor="#C10404"
          style={{
            backgroundColor: "#C10404",
            color: "#fff",
            borderRadius: "10px",
          }}
        />
      </Box>
    </>
  );
};
export default EmpDelete;
