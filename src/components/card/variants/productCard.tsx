import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function ProductCard({
    image,
    largeImage,
    title
}: any) {
    const isMobile = useMobileCheck()
    const imageData = isMobile ? image : largeImage
    return (
        <Stack>
            <Dimage
                src={urlFor(imageData?.asset?._ref).url()}
                alt={imageData?.altText}
                styles={{
                    borderRadius: isMobile ? MobilePxToVw(20) : DesktopPxToVw(30)
                }}
            />
            <Stack textAlign={"left"} py={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}>
                <Typography fontWeight={600}>{title}</Typography>
            </Stack>
        </Stack>
    )
}
