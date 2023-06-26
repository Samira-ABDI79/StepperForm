import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import uploadImg from "../assets/cloud-upload.png";

import { Controller, useController, useFormContext } from "react-hook-form";

// 👇 FileUpload Props Here
interface IFileUploadProps {
  limit: number;
  multiple: boolean;
  name: string;
}

// 👇 Custom Styles for the Box Component
const CustomBox = styled(Box)({
  "&.MuiBox-root": {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "1rem",
  },
  "&.MuiBox-root:hover, &.MuiBox-root.dragover": {
    opacity: 0.6,
  },
});

// 👇 FileUpload Component
const FileUpload: React.FC<IFileUploadProps> = ({ limit, multiple, name }) => {
  // 👇 Actual JSX
  return (
    <>
      <CustomBox>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
            width: "100%",
            height: "13rem",
            border: "2px dashed #4267b2",
            borderRadius: "20px",
          }}
        >
          <Stack justifyContent="center" sx={{ p: 1, textAlign: "center" }}>
            <Typography sx={{ color: "#ccc" }}>
              {limit > 1
                ? "برای آپلود فایل ها را مرور کنید"
                : "برای آپلود فایل را مرور کنید"}
            </Typography>
            <div>
              <img
                src={uploadImg}
                alt="file upload"
                style={{ width: "5rem" }}
              />
            </div>
            <Typography variant="body1" component="span">
              <strong>فایل های پشتیبانی شده</strong>
            </Typography>
            <Typography variant="body2" component="span">
              JPG, JPEG, PNG
            </Typography>
          </Stack>

          <input
            type="file"
            name={name}
            // onChange={onFileDrop}
            multiple={multiple}
            accept="image/jpg, image/png, image/jpeg"
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Box>
      </CustomBox>
    </>
  );
};

export default FileUpload;
