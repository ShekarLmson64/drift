import React from 'react'
import { Box } from '@mui/material'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'

export default function BannerCard({
    image,
    largeImage
}: any) {
    const isMobile = useMobileCheck()
    const imageData = isMobile ? image : largeImage
    return (
        <Box width={"100%"}>
            <Dimage
                src={urlFor(imageData.asset?._ref).url()}
                alt={imageData || "banner"}
                width={'100vw'}
                height={'100%'}
            />
        </Box>
    )
}
