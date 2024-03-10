import { DesktopPxToVw } from "@/utils/pxToVw";
import { Box, styled } from "@mui/material";

export const MainBox = styled(Box)(() => ({
    width: "100%",
    zIndex: "9",
    position: "fixed",
    top: 0,
    padding: `${DesktopPxToVw(10)} ${DesktopPxToVw(60)}` // 10px to top-bottom and 60px to right-left
}))