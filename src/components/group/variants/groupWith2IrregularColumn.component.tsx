import React from 'react'
import { Grid } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { useMobileCheck } from '@/hooks/mobileCheck'
interface GroupInterface {
    items: any[]
}
export default function GroupWith2IrregularColumns({ items }: GroupInterface) {
    const isMobile = useMobileCheck()
    return (
        <Grid
            container
            columnSpacing={DesktopPxToVw(30)}
            rowGap={isMobile ? MobilePxToVw(30) : DesktopPxToVw(30)}>
            {
                items?.map((item: any, index: number) =>
                    <Grid item xs={12} sm={index < 2 ? index % 2 === 0 ? 4 : 8 : index % 2 === 0 ? 8 : 4}>
                        {renderComponentUtility(item)}
                    </Grid>)
            }
        </Grid>
    )
}
