import { DesktopPxToVw, MobilePxToVw } from "@/utils/pxToVw";
import { Box, InputBase, Stack, styled } from "@mui/material";

export const MainBox = styled(Box)(() => ({
    width: "100%",
    zIndex: "9",
    position: "fixed",
    top: 0,
    background: "#fff",
    padding: `${DesktopPxToVw(20)} ${DesktopPxToVw(120)}`, // 10px to top-bottom and 60px to right-left
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)",
    "@media (max-width: 640px)": {
        padding: `${MobilePxToVw(20)} ${MobilePxToVw(30)}`
    },
}))

export const SpacerBox = styled(Box)(() => ({
    width: "100%",
    height: DesktopPxToVw(90),
    "@media (max-width: 640px)": {
        height: MobilePxToVw(80)
    },
}))

export const HeaderStack = styled(Stack)(() => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative"
}))

export const MenuStack = styled(Stack)(() => ({
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: DesktopPxToVw(40),
    alignItems: "center",
    "@media (max-width: 640px)": {
        padding: `0 ${MobilePxToVw(30)}`,
        flexDirection: "column",
        rowGap: MobilePxToVw(40),
        alignItems: "start",
    },
}))

export const ButtonStack = styled(Stack)(() => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: DesktopPxToVw(40),
    "@media (max-width: 640px)": {
        columnGap: MobilePxToVw(20),
    },
}))

export const IconWrapper = styled(Box)(() => ({
    cursor: "pointer"
}))

export const CustomSearch = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px 20px 20px 20px",
    backgroundColor: "#F0F0F0",
    '&:hover': {
        backgroundColor: "#F0F0F0",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: DesktopPxToVw(600),
    "@media (max-width: 640px)": {
        width: "100%",
    },
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 3),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

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

export const MobileMenuStack = styled(Stack)(() => ({
    width: "100vw",
    "@media (max-width: 640px)": {
        padding: MobilePxToVw(40),
        rowGap: MobilePxToVw(50),
    },
}))
export const RowStack = styled(Stack)(() => ({
    width: "fit-content",
    alignSelf: "center",
    flexDirection: "row",
    columnGap: DesktopPxToVw(20),
    alignItems: "center",
    "@media (max-width: 640px)": {
        columnGap: MobilePxToVw(20),
    },
}))

