import React from 'react'
import Dimage from '@/components/custom/customImage/customImage'
import { urlFor } from '@/lib-sanity'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'

export default function IrregularCard({
    image,
    largeImage
}: any) {
    const isMobile = useMobileCheck()
    return (
        <Dimage
            src={urlFor(isMobile ? image?.asset?._ref : largeImage?.asset?._ref).url()}
            alt={'home-icon'}
            width={"100%"}
            height={"100%"}
            styles={{
                borderRadius: isMobile ? MobilePxToVw(20) : DesktopPxToVw(30)
            }}
        />
    )
}
