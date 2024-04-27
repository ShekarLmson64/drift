import React from 'react'
import { Box } from '@mui/material'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function BrandCard({
    image,
    largeImage
}: any) {
    const isMobile = useMobileCheck()
    const imageData = isMobile ? image : largeImage
    return (
        <Dimage
            src={urlFor(imageData?.asset?._ref).url()}
            alt={imageData?.altText}
            styles={{
                maxHeight: isMobile ? MobilePxToVw(40) : DesktopPxToVw(50)
            }}
        />
    )
}
