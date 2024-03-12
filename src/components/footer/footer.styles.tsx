import { DesktopPxToVw, MobilePxToVw } from "@/utils/pxToVw";
import { Box, Stack, Typography, alpha, styled } from "@mui/material";

export const FooterBox = styled(Box)(() => ({
    width: "100%",
    backgroundColor: "#F0F0F0",
    padding: `${DesktopPxToVw(70)} ${DesktopPxToVw(120)}`, // 10px to top-bottom and 60px to right-left
    "@media (max-width: 640px)": {
        padding: `${MobilePxToVw(70)} ${MobilePxToVw(60)}`
    },
}))

export const DynamicStack = styled(Stack)(() => ({
    width: "100%",
    flexDirection: "row",
    columnGap: DesktopPxToVw(80),
    "@media (max-width: 640px)": {
        flexDirection: "column",
        rowGap: MobilePxToVw(40),
        columnGap: MobilePxToVw(80),
    },
}))

export const FooterStack = styled(Stack)(() => ({
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: DesktopPxToVw(30),
    "@media (max-width: 640px)": {
        rowGap: MobilePxToVw(20),
        columnGap: MobilePxToVw(30),
    },
}))

export const ColumnStack = styled(Stack)(() => ({
    flexDirection: "column",
    rowGap: DesktopPxToVw(20),
    "@media (max-width: 640px)": {
        rowGap: MobilePxToVw(10),
    },
}))

export const StyledText = styled(Typography)(() => ({
    color: alpha("#000", 0.6),
    "&:hover": {
        color: "#000"
    }
}))