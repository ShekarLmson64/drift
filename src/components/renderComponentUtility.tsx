import React from 'react'
import Group from './group'
import Card from './card'
import HeroBanner from './herobanner/herobanner.component'

export const renderComponentUtility = (
    props: any,
) => {
    switch (props?.type) {
        case "group":
            return <Group {...props} />
        case "card":
            return <Card />
        case "banner":
            return <HeroBanner {...props} />
        // case "tabLinks":
        //     return <RenderTabsComponent {...props} />
        // case "tabs":
        //     return <RenderTabsComponent {...props} />
        // case "carousel":
        //     return <RenderCarouselComponent {...props} />
        // case "media":
        //     return <RenderMediaComponent {...props} />
        // case "information":
        //     return <RenderInformationComponent {...props} index={index} />
        // case "accordion":
        //     return <RenderAccordionComponent {...props} index={index} />
        // case "faqs":
        //     return <RenderFaqsComponent {...props} />
        // case "stepper":
        //     return <RenderStepperComponent {...props} />
        // case "divider":
        //     return <RenderDividerComponent {...props} />
        // case "custom":
        //     return <RenderCustomComponent {...props} />
        default:
            return <></>
    }
}
