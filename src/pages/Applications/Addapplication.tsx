import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  styled,
  Divider,
} from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import React, { useState } from "react";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Colors } from "../../utils/Colors";
import CustomButton from "../../components/CustomButton";
import { CommonHeader } from "../../components/CommonHeader";
import done from "../../assets/done.svg";
import { StepIconProps } from "@mui/material/StepIcon";
import SelectAquirer from "../../components/Application/SelectAquirer";
import { LoadButton } from "../../components/LoadButton";
import { MerchantInformation } from "../../components/Application/MerchantInformation";
import { MerchantDetails } from "../../components/Application/MerchantDetails";
import { BankInformation } from "../../components/Application/BankInformation";
import { ApplicationInformation } from "../../components/Application/ApplicationInformation";
import ConfirmDialog from "../../components/ConfirmDialog";

function getSteps(): string[] {
  return [
    "Select Aquirer",
    "Merchnat Details",
    "Address Details",
    "Bank Details",
    "Salesperson Details",
  ];
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 25px)",
    right: "calc(50% + 25px)",
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
    borderTopWidth: 12,
    borderRadius: 0,
    boxShadow: "0px 0.9375px 61.75px 3px #00000040",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color:
      theme.palette.mode === "dark" ? theme.palette.divider[700] : "#D9D9D9",
    display: "flex",
    height: 35,
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
      //border: "5px solid #D9D9D9",
      alignItem: "center",
      textAlign: "center",
      fontSize: "21px",
      fontWeight: "700",
      color: "#fff",
      borderRadius: "50%",
      backgroundColor: "rgba(217, 217, 217, 1)",
      boxShadow: "0px 0.9375px 3.75px 0px #00000040",
    },
  })
);

function QontoStepIcon(props: { step: number } & StepIconProps) {
  const { active, completed, className, step } = props;
  

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Box
          sx={{
            boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25) inset",
            backgroundColor: "rgba(240, 240, 240, 1)",
            width: "50px",
            height: "50px",
            alignItem: "center",
            textAlign: "center",
            borderRadius: "50%",
            padding: "10px 10px",
          }}
        >
          <div
            className="QontoStepIcon-circle"
            style={{ backgroundColor: "rgba(119, 209, 119, 1)" }}
          >
            {step}
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.25) inset",
            backgroundColor: "rgba(240, 240, 240, 1)",
            width: "50px",
            height: "50px",
            alignItem: "center",
            textAlign: "center",
            borderRadius: "50%",
            padding: "10px 10px",
          }}
        >
          <div className="QontoStepIcon-circle">{step}</div>
        </Box>
      )}
    </QontoStepIconRoot>
  );
}

function getStepContent(step: number): JSX.Element | string {
  switch (step) {
    case 0:
      return (
          <SelectAquirer />
      );
    case 1:
      return (
          <MerchantInformation />
      );
    case 2:
      return (
          <MerchantDetails />
      );
    case 3:
      return (
          <BankInformation />
      );
    case 4:
      return (
          <ApplicationInformation />
      );
    default:
      return "";
  }
}

export const Addapplication = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [skippedSteps, setSkippedSteps] = useState<number[]>([]);
  const steps: string[] = getSteps();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = (): void => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
    setActiveStep(activeStep + 1);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        {activeStep === 0 || activeStep === 5 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: Colors.Textcolor,
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Add Applications
            </Typography>
            <Box sx={{ width: "20%", alignSelf: "center", height: "0.28px", backgroundColor: "rgba(119, 209, 119, 1)"}} > </Box>
          </Box>
        ) : (
          <CommonHeader header="Add Application">
            <CustomButton
              label="Cancel"
              hoverColor={Colors.deletebtnColor}
              style={{
                backgroundColor: Colors.deletebtnColor,
                color: "#fff",
              }}
            ></CustomButton>
          </CommonHeader>
        )}
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{ marginTop: "2rem" }}
          connector={<QontoConnector />}
        >
          {steps.map((step) => {
            const labelProps: { optional?: JSX.Element } = {};
            const stepProps: { completed?: boolean } = {};

            return (
              <Step {...stepProps} key={step}>
                <StepLabel
                  {...labelProps}
                  StepIconComponent={(props) => (
                    <QontoStepIcon {...props} step={steps.indexOf(step) + 1} />
                  )}
                  sx={{
                    "& .MuiStepLabel-label": {
                      backgroundColor: activeStep > steps.indexOf(step) ? "rgba(120, 175, 129, 1)" : "#ECECEC",
                      color: activeStep > steps.indexOf(step) ? "#fff" : "#8C8C8C",
                      boxShadow: "0px 0.9375px 3.75px 0px #00000040",
                      borderRadius: "2rem",
                      padding: "6px",
                      "@media(max-width: 600px)":{
                        padding: 0,
                        fontSize: "8px"
                      }
                    },
                  }}
                >
                  {step}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Box
            sx={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <img src={done} alt="" style={{ width: 50, height: 50 }}></img>
            <Typography
              sx={{
                color: " rgba(4, 133, 25, 1)",
                fontSize: "20px",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Application Send For Confirmation
            </Typography>
          </Box>
        ) : (
          <>
            <form>{getStepContent(activeStep)}</form>
            <Box sx={{ display: "flex", gap: 1 }}>
              {activeStep !== 0 && (
                <CustomButton
                  onClick={handleBack}
                  label={"Previous"}
                  hoverColor={Colors.editColor}
                  style={{
                    width: "15%",
                    height: "2.3rem",
                    marginTop: "2rem",
                    fontSize: "15px",
                    backgroundColor: Colors.editColor,
                    color: "#fff",
                  }}
                ></CustomButton>
              )}
              {activeStep !== 4 ? (
                <LoadButton
                  onClick={handleNext}
                  hoverColor={
                    activeStep === 0 ? Colors.editColor : Colors.successColor
                  }
                  style={{
                    width: "17%",
                    marginTop: "2rem",
                    backgroundColor:
                      activeStep === 0 ? Colors.editColor : Colors.successColor,
                    color: "#fff",
                  }}
                >
                  Next
                </LoadButton>
              ) : (
                <CustomButton
                  onClick={handleSubmit}
                  label="Submit"
                  style={{
                    width: "17%",
                    height: "2.2rem",
                    fontWeight: "700",
                    fontSize: "15px",
                    marginTop: "2rem",
                    borderImageSource:
                      "linear-gradient(180deg, #069FFF 0%, #589E58 0.01%, #77D177 100%)",
                    borderImageSlice: "0.94",
                    color: `${Colors.LinkColor}`,
                    border: `1px solid ${Colors.LinkColor}`,
                  }}
                ></CustomButton>
              )}
            </Box>
            <ConfirmDialog
              title="Confirmation"
              desc="Are You Sure You Want"
              open={open}
            >
              <Box>
                <Box sx={{ display: "flex", gap: "2px" }}>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "12px",
                      color: "#000000",
                    }}
                  >
                    To
                  </Typography>
                  <Typography
                    sx={{
                      color: Colors.successColor,
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    Submit Your Application
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "1rem", gap: 2 }}>
                <CustomButton
                  onClick={handleClose}
                  label=" No, Not Now"
                  hoverColor={Colors.editColor}
                  style={{
                    backgroundColor: Colors.editColor,
                    color: "#fff",
                    fontSize: "10px",
                  }}
                />
                <CustomButton
                  onClick={handleConfirm}
                  label=" Yes, Confirm"
                  hoverColor={Colors.successColor}
                  style={{
                    backgroundColor: Colors.successColor,
                    color: "#fff",
                    fontSize: "10px",
                  }}
                />
              </Box>
            </ConfirmDialog>
          </>
        )}
      </CustomBox>
    </Box>
  );
};
