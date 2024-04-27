import React from 'react'
import { Box } from '@mui/material'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function ProductCard({
    image,
    largeImage
}: any) {
    const isMobile = useMobileCheck()
    return (
        <Dimage
            src={urlFor(isMobile ? image?.asset?._ref : largeImage?.asset?._ref).url()}
            alt={'home-icon'}
            styles={{
                borderRadius: isMobile ? MobilePxToVw(20) : DesktopPxToVw(30)
            }}
        />
    )
}
