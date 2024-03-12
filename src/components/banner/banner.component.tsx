import React from 'react'
import Dimage from '../custom/customImage/customImage'
import { useMobileCheck } from '@/customHooks/mobileCheck'

export default function Banner() {
    const isMobile = useMobileCheck()
    return (
        <>
            <Dimage
                src={isMobile
                    ? "/sample/msite-banner.png"
                    : "/sample/herobanner1.png"}
                alt={"home-icon"}
                width={'100%'}
                height={'auto'}
            />
        </>
    )
}
