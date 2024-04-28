import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
interface GroupInterface {
    items: any[]
}
export default function GroupWith4Products({ items }: GroupInterface) {
    const isMobile = useMobileCheck()
    return (
        <Box width={"100vw"}
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
                    items?.map((item: any) =>
                        <Box textAlign={"center"}>
                            {renderComponentUtility(item)}
                        </Box>)
                }
            </Stack>
        </Box>
    )
}
