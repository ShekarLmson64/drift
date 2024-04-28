import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import RenderActionItem from '@/components/hoc/actionItem/action.styles'
import { useRouter } from 'next/router'
interface GroupInterface {
    items: any[]
}
export default function GroupWith4Products({ items }: GroupInterface) {
    const isMobile = useMobileCheck()
    const router = useRouter()
    const handleRoute = () => {
        router.push("/brands")
    }
    return (
        <Stack rowGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(30)}>
            <Box
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    "-ms-overflow-style": "none",  /* IE and Edge */
                    "scrollbar-width": "none"
                }}
                overflow={isMobile ? "scroll" : "unset"}>
                <Stack flexDirection={"row"} width={isMobile ? "fit-content" : "88vw"}
                    justifyContent={isMobile ? "unset" : "space-around"}
                    columnGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(55)}
                    sx={{ flexWrap: isMobile ? "nowrap !important" : "wrap" }}>
                    {
                        items?.map((item: any, index: number) =>
                            <Box textAlign={"center"}key={`product-${index}`}>
                                {renderComponentUtility(item)}
                            </Box>)
                    }
                </Stack>
            </Box>
            <Box width={"100%"} sx={{ textAlign: "center" }}>
                <RenderActionItem
                    variant="outlined"
                    onClick={handleRoute}
                    disabled={false}
                    title={"View All"}
                >
                </RenderActionItem>
            </Box>
        </Stack>
    )
}
