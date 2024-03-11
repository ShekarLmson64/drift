import { DesktopPxToVw } from "@/utils/pxToVw";
import { Box, Stack, styled } from "@mui/material";

export const FooterBox = styled(Box)(() => ({
    width: "100%",
    backgroundColor: "#F0F0F0",
    padding: `${DesktopPxToVw(70)} ${DesktopPxToVw(120)}`, // 10px to top-bottom and 60px to right-left
}))

export const FooterStack = styled(Stack)(() => ({
    width: "100%",
    flexDirection: "row",
}))

export const ColumnStack = styled(Stack)(() => ({
    width: "100%",
    flexDirection: "column",
    rowGap: DesktopPxToVw(20)
}))