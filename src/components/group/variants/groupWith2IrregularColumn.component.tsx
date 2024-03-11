import React from 'react'
import { Grid } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
interface GroupInterface {
    items: any[]
}
export default function GroupWith2IrregularColumns({ items }: GroupInterface) {
    return (
        <Grid container>
            {
                items?.map((item: any) =>
                    <Grid item xs={2} sm={4}>
                        {renderComponentUtility(item)}
                    </Grid>)
            }
        </Grid>
    )
}
