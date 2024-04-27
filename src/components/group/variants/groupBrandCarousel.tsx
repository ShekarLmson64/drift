import React from 'react'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMobileCheck } from '@/hooks/mobileCheck';
interface GroupInterface {
    items: any[]
}
export default function GroupBrandCarousel({ items }: GroupInterface) {
    const isMobile = useMobileCheck()
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        pauseOnHover: true,
        swipeToSlide: true,
        initialSlide: 0,
        slidesToShow: isMobile ? 3 : 5,
        slidesToScroll: 1,
        padding: 2
    }
    return (
        <Box sx={{ backgroundColor: "#000" }} py={3}>
            <Slider {...settings}>
                {
                    items?.map((item: any) =>
                        <Box sx={{ display: "grid !important", placeItems: "center" }}>
                            {renderComponentUtility(item)}
                        </Box>)
                }
            </Slider>
        </Box>
    )
}
