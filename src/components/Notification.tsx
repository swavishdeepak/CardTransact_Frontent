import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import Divider from "@mui/material/Divider";
import CustomButton from "./CustomButton";
import { Colors } from "../utils/Colors";

interface NotificationData {
  id: number;
  title: string;
  description: string;
}

interface NotificationProps {
  notifications?: NotificationData[];
  children?: ReactNode;
}

const Notification: React.FC<NotificationProps> = ({ notifications}) => {
  
  return (
      <Box sx={{ display: "column", gap: 1, p:2 }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#202020",
            fontSize: {sm: "15px", md: "20px"},
            fontWeight: "600",
          }}
        >
          Notification
        </Typography>
        <Divider textAlign="center" sx={{fontSize: "12px", marginTop: "0.8rem"}}>Today</Divider>
        {notifications && (
          <React.Fragment>
            {notifications.map((notification) => (
              <Box
                key={notification.id}
                sx={{
                  display: "flex",
                  gap: 1,
                  border: "0.5px solid #898989",
                  borderRadius: "8px",
                  marginTop: "10px",
                  textAlign: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    "@media(max-width: 600px)":{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      padding: "5px",
                    },
                    p: "3px",
                    borderRadius: "50%",
                    backgroundColor: "#F9837C",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{"@media(max-width: 600px)":{
                      fontSize: "10px"
                  }}}>
                    {notification.title ? notification.title.charAt(0) : ""}
                  </Typography>
                </Box>
                <Box sx={{textAlign: "left"}}>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontSize: "12px",
                      "@media(max-width: 600px)":{
                        fontSize: "9px"

                      },
                      fontWeight: "700",
                    }}
                  >
                    {notification.title || ""}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#898989",
                      fontSize: "10px",
                      "@media(max-width: 600px)":{
                        fontSize: "8px"

                      },
                      fontWeight: "400",
                    }}
                  >
                    {notification.description || ""}
                  </Typography>
                </Box>
               <Box sx={{display: "flex", gap:1, flexDirection: "row"}}>
               <CustomButton 
               label="Edit"
               style={{
                border: "1px solid #898989",
                color: "#898989",
                fontSize: "10px",
                height: "1.5rem",
              }}

              />
              <CustomButton
              label="Approved"
              hoverColor={Colors.successColor}
              style={{
                backgroundColor: Colors.successColor,
                color: "#fff",
                height: "1.5rem",
                fontSize: "10px"
              }}

              />
              <CustomButton 
              label="Reject"
              hoverColor={Colors.deletebtnColor}
              style={{
                backgroundColor: Colors.deletebtnColor,
                color: "#fff",
                height: "1.5rem",
                fontSize: "10px"
              }}
              />
               </Box>
              </Box>
            ))}
          </React.Fragment>
        )}
        
      </Box>
    
  );
};

export default Notification;
