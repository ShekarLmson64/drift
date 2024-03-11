import Group from '@/components/group'
import HeroBanner from '@/components/herobanner/herobanner.component'
import { Stack } from '@mui/material'
import React from 'react'

export default function PageBody() {
    return (
        <Stack>
            <HeroBanner />
            <Group />
        </Stack>
    )
}
