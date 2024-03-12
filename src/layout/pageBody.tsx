import Group from '@/components/group'
import Banner from '@/components/banner/banner.component'
import { Stack } from '@mui/material'
import React from 'react'

export default function PageBody() {
    return (
        <Stack>
            <Banner />
            <Group />
        </Stack>
    )
}
