import React from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    styled,
  } from "@mui/material";

import StepConnector, {
    stepConnectorClasses,
  } from "@mui/material/StepConnector";
  import { StepIconProps } from "@mui/material/StepIcon";



const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#ECECEC",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#ECECEC",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#ECECEC",
      borderTopWidth: 10,
      borderRadius: 5,
      boxShadow: "0px 0.9375px 3.75px 0px #00000040",
    },
  }));
  
  const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color:
        theme.palette.mode === "dark" ? theme.palette.divider[700] : "#D9D9D9",
      display: "flex",
      height: 22,
      alignItems: "center",
      ...(ownerState.active && {
        color: "#77D177",
      }),
      "& .QontoStepIcon-completedIcon": {
        width: 20,
        height: 20,
        border: "5px solid #77D177",
        borderRadius: "50%",
        backgroundColor: "rgba(119, 209, 119, 1)",
        color: "#fff",
      },
      "& .QontoStepIcon-circle": {
        width: 30,
        height: 30,
        border: "5px solid #D9D9D9",
        alignItem: "center",
        textAlign: "center",
        fontSize: "17px",
        fontWeight: "700",
        color: "#fff",
        borderRadius: "50%",
        backgroundColor: "rgba(217, 217, 217, 1)",
        boxShadow: "0px 0.9375px 3.75px 0px #00000040",
      },
    })
  );

interface LinearStepperProps {
  steps: string[];
  activeStep: number;
}


function QontoStepIcon(props: { step: number } & StepIconProps) {
    const { active, completed, className, step } = props;
    console.log("step", step);
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Box
            sx={{
              boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25) inset",
              width: "50px",
              height: "50px",
              alignItem: "center",
              textAlign: "center",
              borderRadius: "50%",
              padding: "10px 10px"
             
            }}
          >
            <div className="QontoStepIcon-circle" style={{backgroundColor: "rgba(119, 209, 119, 1)"}}>{step}</div>
          </Box>
        ) : (
          <Box sx={{
            boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25) inset",
            width: "50px",
            height: "50px",
            alignItem: "center",
            textAlign: "center",
            borderRadius: "50%",
            padding: "10px 10px"
           
            
            
          }}>
            <div className="QontoStepIcon-circle">{step}</div>
          </Box>
        )}
      </QontoStepIconRoot>
    );
  }

export const LinearStepper: React.FC<LinearStepperProps> = ({ steps, activeStep }) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      sx={{ marginTop: "2rem" }}
      connector={<QontoConnector />}
    >
      {steps.map((step, index) => {
        const labelProps: { optional?: JSX.Element } = {};
        const stepProps: { completed?: boolean } = {};

        return (
          <Step {...stepProps} key={index}>
            <StepLabel
              {...labelProps}
              StepIconComponent={(props) => (
                <QontoStepIcon {...props} step={index + 1} />
              )}
              sx={{
                "& .MuiStepLabel-label": {
                  backgroundColor: "#ECECEC",
                  color: "#8C8C8C",
                  boxShadow: "0px 0.9375px 3.75px 0px #00000040",
                  borderRadius: "2rem",
                  padding: "6px",
                },
              }}
            >
              {step}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
