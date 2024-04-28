import React from 'react'
import { Grid } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
interface GroupInterface {
    items: any[]
}
export default function GroupWith4Columns({ items }: GroupInterface) {
    return (
        <Grid container>
            {
                items?.map((item: any, index: number) =>
                    <Grid item xs={2} sm={4} key={`card-${index}`}>
                        {renderComponentUtility(item)}
                    </Grid>)
            }
        </Grid>
    )
}
