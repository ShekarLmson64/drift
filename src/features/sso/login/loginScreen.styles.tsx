import { DesktopPxToVw, MobilePxToVw } from "@/utils/pxToVw";
import { Box, Stack, styled } from "@mui/material";

export const LoginStack = styled(Stack)(() => ({
    width: "40vw",
    padding: DesktopPxToVw(100),
    rowGap: DesktopPxToVw(60),
    "@media (max-width: 640px)": {
        width: "100%",
        padding: MobilePxToVw(80),
        rowGap: MobilePxToVw(50),
    },
}))

export const TitleColumn = styled(Stack)(() => ({
    alignItems: "center",
    textAlign: "center",
    rowGap: DesktopPxToVw(20),
    "@media (max-width: 640px)": {
        rowGap: MobilePxToVw(20),
    },
}))

export const PositionBox = styled(Box)(() => ({
    position: "absolute",
    cursor: "pointer",
    top: DesktopPxToVw(50),
    right: DesktopPxToVw(50),
    "@media (max-width: 640px)": {
        top: MobilePxToVw(40),
        right: MobilePxToVw(40),
    },
}))

export const DetailStack = styled(Stack)(() => ({
    flexDirection: "row",
    columnGap: DesktopPxToVw(20),
    rowGap: 0,
    "@media (max-width: 640px)": {
        flexDirection: "row",
        columnGap: 0,
        rowGap: MobilePxToVw(40)
    },
}))