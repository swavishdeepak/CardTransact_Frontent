import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface CustomTextProps {
  children?: ReactNode; // Include children as part of the props
  text: string; 
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomText: React.FC<CustomTextProps> = ({ children, text, style, onClick }) => {
  return (
    <Typography style={style} onClick={onClick}>{text}</Typography>
  );
};

export default CustomText;
