import { DesktopPxToVw } from "@/utils/pxToVw";
import { Box, InputBase, Stack, alpha, styled } from "@mui/material";

export const MainBox = styled(Box)(() => ({
    width: "100%",
    zIndex: "9",
    position: "fixed",
    top: 0,
    background: "#fff",
    padding: `${DesktopPxToVw(20)} ${DesktopPxToVw(120)}`, // 10px to top-bottom and 60px to right-left
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)"
}))

export const SpacerBox = styled(Box)(() => ({
    width: "100%",
    height: DesktopPxToVw(110)
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
    alignItems: "center"
}))

export const ButtonStack = styled(Stack)(() => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: DesktopPxToVw(40),
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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

