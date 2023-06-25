import { useState } from "react";
import { useDispatch } from "react-redux";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import { style } from "../Style/Form";
import { UploadImage, Form, ViewInformation } from "../components";
import { MyStep } from "../Style/Stepper";
function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleFinish = () => dispatch({ type: "SUBMIT_FORM" });

  return (
    <div className="StepperFormBackground">
      <Box sx={style.steperWrapper} dir="rtl">
        <Stepper activeStep={activeStep}>
          <MyStep>
            <StepLabel sx={style.StepLabel}>مرحله 1</StepLabel>
          </MyStep>
          <MyStep>
            <StepLabel sx={style.StepLabel}>مرحله 2</StepLabel>
          </MyStep>
          <MyStep>
            <StepLabel sx={style.StepLabel}>مرحله 3</StepLabel>
          </MyStep>
        </Stepper>
        {activeStep === 0 && (
          <Form handleFinish={handleFinish} handleNext={handleNext} />
        )}
        {activeStep === 1 && (
          <UploadImage handleBack={handleBack} handleNext={handleNext} />
        )}
        {activeStep === 2 && (
          <ViewInformation
            handleFinish={handleFinish}
            handleBack={handleBack}
          />
        )}
      </Box>
    </div>
  );
}

export default StepperForm;
