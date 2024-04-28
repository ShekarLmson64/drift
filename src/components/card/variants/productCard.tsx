import React from 'react'
import { Rating, Stack, Typography } from '@mui/material'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function ProductCard({
    image,
    largeImage,
    title,
    subTitle,
    description
}: any) {
    const isMobile = useMobileCheck()
    const imageData = isMobile ? image : largeImage
    const getLabelText = () => {
        return `${parseFloat(subTitle)}/5`
    }
    return (
        <Stack>
            <Dimage
                src={urlFor(imageData?.asset?._ref).url()}
                alt={imageData?.altText}
                styles={{
                    borderRadius: isMobile ? MobilePxToVw(20) : DesktopPxToVw(30)
                }}
            />
            <Stack textAlign={"left"}
                py={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}
                rowGap={isMobile ? MobilePxToVw(10) : DesktopPxToVw(10)}>
                <Typography fontWeight={600}>{title}</Typography>
                <Stack flexDirection={"row"} alignItems={"center"} columnGap={isMobile ? MobilePxToVw(10) : DesktopPxToVw(10)}>
                    <Rating name="half-rating-read" value={parseFloat(subTitle)} precision={0.25} readOnly />
                    <Typography>{getLabelText()}</Typography>
                </Stack>
                <Typography fontWeight={700}>{`₹${description}`}</Typography>
            </Stack>
        </Stack>
    )
}
