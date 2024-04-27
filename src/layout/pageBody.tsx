import { Stack } from '@mui/material'
import React from 'react'
import { renderComponentUtility } from '@/components/renderComponentUtility'

export default function PageBody({ items }: any) {
    return (
        <Stack width={"100%"}>
            {
                items?.map((item: any) =>
                    <>
                        {renderComponentUtility(item)}
                    </>)
            }
        </Stack>
    )
}
