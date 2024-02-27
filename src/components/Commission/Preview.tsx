// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
// import { Colors } from '../../utils/Colors';
// import { CustomBox } from '../MyCustom/CustomBox';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   header: {
//     fontSize: "15px !important",
//     fontWeight: "600 !important",
//   },
//   content: {
//     color: "rgba(58, 58, 58, 1) !important",
//     fontSize: "13px !important",
//     fontWeight: "300 !important",
//     lineHeight: "15px !important",
//   },
// });
// const data1 = [
//     {
//       sr: "01",
//       date: "20/2/2024",
//       rental: "01",
//       model: "20/2/2024",
//       duration: "01",
//       commission: "20/2/2024",
//     },
//     {
//       sr: "02",
//       date: "20/2/2024",
//       rental: "01",
//       model: "20/2/2024",
//       duration: "01",
//       commission: "20/2/2024",
//     },
//     {
//       sr: "03",
//       date: "20/2/2024",
//       rental: "01",
//       model: "20/2/2024",
//       duration: "01",
//       commission: "20/2/2024",
//     },
//   ];

// interface PreviewProps {
//     title?: string;
//     children?: React.ReactNode;
//     SerialNo?: number,
//     date?: string,
//     rental?: string,
//     duration?: string,
//     commisson?: string

// }

// export const Preview:React.FC<PreviewProps> = ({children, SerialNo, date,rental,duration,commisson, title}) => {
//     const classes = useStyles();
//   return (
//     <CustomBox
//     style={{
//       border: `1px solid ${Colors.LinkColor}`,
//       marginTop: "2rem",
//     }}
//   >
//     <Typography
//       sx={{
//         color: "rgba(32, 32, 32, 1)",
//         fontSize: "20px",
//         fontWeight: "600",
//         marginTop: "1rem"
//       }}
//     >
//       {title}
//     </Typography>
//     <Box
//       sx={{
//         border: "1.5px solid rgba(236, 236, 236, 1)",
//         borderRadius: "10px",
//         p: 2,
//         marginTop: "1rem",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           borderBottom: "1px solid rgba(137, 137, 137, 1)",
//           padding: 1,
//         }}
//       >
//         <Typography className={classes.header}>Sr.No</Typography>
//         <Typography className={classes.header}>Date</Typography>
//         <Typography className={classes.header}>Rental</Typography>
//         <Typography className={classes.header}>Model</Typography>
//         <Typography className={classes.header}>Duration</Typography>
//         <Typography className={classes.header}>Commission</Typography>
//       </Box>
//       {data1.map((data, index) => {
//         return (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
//               padding: 1,
//             }}
//           >
//             <Typography className={classes.content}>
//               {data.sr}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.date}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.rental}
//               </Typography>
//             </Box>
//             <Typography className={classes.content}>
//               {data.model}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.duration}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.commission}
//               </Typography>
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//     <Box
//       sx={{
//         border: "1.5px solid rgba(236, 236, 236, 1)",
//         borderRadius: "10px",
//         p: 2,
//         marginTop: "1rem",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           borderBottom: "1px solid rgba(137, 137, 137, 1)",
//           padding: 1,
//         }}
//       >
//         <Typography className={classes.header}>Sr.No</Typography>
//         <Typography className={classes.header}>Date</Typography>
//         <Typography className={classes.header}>Rental</Typography>
//         <Typography className={classes.header}>Model</Typography>
//         <Typography className={classes.header}>Duration</Typography>
//         <Typography className={classes.header}>Commission</Typography>
//       </Box>
//       {data1.map((data, index) => {
//         return (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
//               padding: 1,
//             }}
//           >
//             <Typography className={classes.content}>
//               {data.sr}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.date}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.rental}
//               </Typography>
//             </Box>
//             <Typography className={classes.content}>
//               {data.model}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.duration}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.commission}
//               </Typography>
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//     <Box
//       sx={{
//         border: "1.5px solid rgba(236, 236, 236, 1)",
//         borderRadius: "10px",
//         p: 2,
//         marginTop: "1rem",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           borderBottom: "1px solid rgba(137, 137, 137, 1)",
//           padding: 1,
//         }}
//       >
//         <Typography className={classes.header}>Sr.No</Typography>
//         <Typography className={classes.header}>Date</Typography>
//         <Typography className={classes.header}>Rental</Typography>
//         <Typography className={classes.header}>Model</Typography>
//         <Typography className={classes.header}>Duration</Typography>
//         <Typography className={classes.header}>Commission</Typography>
//       </Box>
//       {data1.map((data, index) => {
//         return (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
//               padding: 1,
//             }}
//           >
//             <Typography className={classes.content}>
//               {data.sr}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.date}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.rental}
//               </Typography>
//             </Box>
//             <Typography className={classes.content}>
//               {data.model}
//             </Typography>
//             <Typography className={classes.content}>
//               {data.duration}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <CurrencyPoundIcon
//                 sx={{ width: "13px", height: "13px" }}
//               />
//               <Typography className={classes.content}>
//                 {data.commission}
//               </Typography>
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//     {children}

//     {/* <Box sx={{ display: "flex", gap: 1, marginTop: "1.5rem" }}>
//       <CustomButton
//         label="Cancel"
//         onClick={handlePreviewClose}
//         hoverColor={Colors.deletebtnColor}
//         style={{
//           width: "20%",
//           height: "2.3rem",
//           fontSize: "15px",
//           boxShadow: "5.625px 7.5px 9.375px 0px rgba(0, 0, 0, 0.24)",
//           backgroundColor: Colors.deletebtnColor,
//           color: "#ffffff",
//         }}
//       />
//       <CustomButton
//         label="Confirm"
//         hoverColor={Colors.successColor}
//         style={{
//           width: "20%",
//           height: "2.3rem",
//           fontSize: "15px",
//           boxShadow: "5.625px 7.5px 9.375px 0px rgba(0, 0, 0, 0.24)",

//           backgroundColor: Colors.successColor,
//           color: "#ffffff",
//         }}
//       />
//     </Box> */}
//   </CustomBox>

//   )
// }

import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PreviewRowItem } from "./PreviewRowItem";


const useStyles = makeStyles({
  header: {
    fontSize: "15px !important",
    fontWeight: "600 !important",
  },
  content: {
    color: "rgba(58, 58, 58, 1) !important",
    fontSize: "13px !important",
    fontWeight: "300 !important",
    lineHeight: "15px !important",
  },
});
const data1 = [
  {
    sr: "01",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
  {
    sr: "02",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
  {
    sr: "03",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
];

interface PreviewProps {
  
 
}

export const Preview: React.FC<PreviewProps> = ({
  
 
 
}) => {
  const classes = useStyles();
  return (

      <Box
        sx={{
          border: "1.5px solid rgba(236, 236, 236, 1)",
          borderRadius: "10px",
          p: 2,
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(137, 137, 137, 1)",
            padding: 1,
          }}
        >
          <Typography className={classes.header}>Sr.No</Typography>
          <Typography className={classes.header}>Date</Typography>
          <Typography className={classes.header}>Rental</Typography>
          <Typography className={classes.header}>Model</Typography>
          <Typography className={classes.header}>Duration</Typography>
          <Typography className={classes.header}>Commission</Typography>
        </Box>
        {data1.map((data, index) => {
          return (
            <PreviewRowItem
              key={index}
              sr={data.sr}
              date={data.date}
              rental={data.rental}
              model={data.model}
              duration={data.duration}
              commission={data.commission}
            />
          );
        })}
      </Box>
  );
};
