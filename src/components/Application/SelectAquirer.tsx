import React, { useState } from "react";
import BasicSelect from "../BasicSelect"; 
import { CustomBox } from "../MyCustom/CustomBox";
import { Colors } from "../../utils/Colors";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg"
import { SelectChangeEvent } from '@mui/material/Select';

interface SelectAquirerProps {

}

const SelectAquirer: React.FC<SelectAquirerProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const selectAquirer = [
    { value: "aqu1", label: "Aqui1" },
    { value: "aqu2", label: "aqu2" },
    { value: "aqu3", label: "aqu3" },
  ];

  return (
    <CustomBox
      style={{
        border: `0.5px solid ${Colors.LinkColor}`,
        marginTop: "2rem",
       
      }}
    >
      <CommonHeader header="Select Aquirer">
       <img src={NavIcon} alt=""></img>
      </CommonHeader>
      <BasicSelect
         label="Select Aquirer"
         placeholder="Select"
          sx={{
            width: "30%",
            position: "relative",
            border: "1px solid rgba(220, 220, 220, 1)",
            padding: "10px 6px 0px 8px",
          }}
          name={"selectedValue2"}
          value={selectedValue}
          handleChange={handleChange}
          size="small"
          items={selectAquirer}
        />
    </CustomBox>
  );
};

export default SelectAquirer;
