import React from 'react'
import GroupWith4Columns from './variants/groupWith4Columns.component'
import GroupWith2IrregularColumns from './variants/groupWith2IrregularColumn.component'
import GroupBannerCarousel from './variants/groupBannerCarousel'
import GroupBrandCarousel from './variants/groupBrandCarousel'
import GroupWith4Products from './variants/groupWith4Proudcts'

export default function renderGroupVariant(variant: string, items: any) {
    const allVariants: any = {
        "bannerImageCarousel": <GroupBannerCarousel items={items} />,
        "brandImageCarousel": <GroupBrandCarousel items={items} />,
        "drift.group.group-with-4-columns": <GroupWith4Columns items={items} />,
        "productGroup": <GroupWith4Products items={items} />,
        "greyBackgroundGroup": <GroupWith2IrregularColumns items={items} />,
    }
    return (
        allVariants[variant]
    )
}
