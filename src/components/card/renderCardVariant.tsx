import React from 'react'
import BannerCard from './variants/bannerCard'
import BrandCard from './variants/brandCard'

export default function renderCardVariant(variant: string, data: any) {
    const allVariants: any = {
        "bannerCarouselItem": <BannerCard {...data} />,
        "brandCarouselItem": <BrandCard {...data} />
    }
    return (
        allVariants[variant]
    )
}
