import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomTextInput from "../CustomInput";
import { LoadButton } from "../LoadButton";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { toast } from "react-toastify";


const EmpRemarkUpdateDetails = () => {
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false)

  const handleRemarkSubmit = async() => {
    
    //   try{
    //     setLoading(true)
    //   const {data} = await API_AXIOS.post(Apis, {remark})


    //   }catch(err){

    //   }
    //   setLoading(false)
  };

  return (
    <Box>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt={3}
      >
        <Grid item xs={12} mt={2}>
          <CustomTextInput
            label="Add Special Remarks"
            rows={4}
            value={remark}
            multiline={true}
            placeholder="Type Here..."
            onChange={(e) => setRemark(e.target.value)}
          />
        </Grid>
      </Grid>
      <LoadButton
        type="submit"
        style={{
          marginTop: 3,
          width: "25%",
          "@media(max-width: 900px)": {
            width: "40%",
            "@media(max-width: 600px)": {
              width: "100%",
            },
          },
        }}
        loading={loading}
        onClick={handleRemarkSubmit}
      >
        Save Remark
      </LoadButton>
    </Box>
  );
};

export default EmpRemarkUpdateDetails;
