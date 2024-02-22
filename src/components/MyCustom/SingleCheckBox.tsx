import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import { Colors } from '../../utils/Colors';


const CustomRadio = styled(Radio)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
      width: '10px', 
      height: '10px',
      borderRadius: '50%',
    
      
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        width: '10px', 
        height: '10px',
        borderRadius: '50%',
      backgroundColor: Colors.LinkColor,
      color: Colors.LinkColor
    },
  }));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: Colors.editColor,
    fontSize: '10px', 
  },
}));

export default function SingleCheckBox() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel  style={{color: "#000000"}}>Is SalesPerson From a Company or Individual</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{display: "flex", flexDirection: "column", gap: "-10px"}}
      >
        <CustomFormControlLabel value="from a Company" control={<CustomRadio />} label="From a Company" />
        <CustomFormControlLabel value="is an Individual" control={<CustomRadio />} label="Is an Individual" />
      </RadioGroup>
    </FormControl>
  );
}
