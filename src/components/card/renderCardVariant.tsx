import React from 'react'
import BannerCard from './variants/bannerCard'
import BrandCard from './variants/brandCard'
import ProductCard from './variants/IrregularCard'
import IrregularCard from './variants/IrregularCard'

export default function renderCardVariant(variant: string, data: any) {
    const allVariants: any = {
        "bannerCarouselItem": <BannerCard {...data} />,
        "brandCarouselItem": <BrandCard {...data} />,
        "greyBackgroundItem": <IrregularCard {...data} />,
        "productCard": <ProductCard {...data} />,
    }
    return (
        allVariants[variant]
    )
}
