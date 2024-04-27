import React from 'react'
import { Box, Grid } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
interface GroupInterface {
    items: any[]
}
export default function GroupWith4Products({ items }: GroupInterface) {
    const isMobile = useMobileCheck()
    return (
        <Box width={"100vw"} overflow={isMobile ? "scroll" : "unset"}>
            <Grid container width={isMobile ? "fit-content" : "100%"}
                columnGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}
                sx={{ flexWrap: "nowrap !important" }}>
                {
                    items?.map((item: any) =>
                        <Grid textAlign={"center"} item xs={3}>
                            {renderComponentUtility(item)}
                        </Grid>)
                }
            </Grid>
        </Box>
    )
}
