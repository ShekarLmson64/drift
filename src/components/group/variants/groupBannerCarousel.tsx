import React from 'react'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import { renderComponentUtility } from '@/components/renderComponentUtility'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface GroupInterface {
    items: any[]
}
export default function GroupBannerCarousel({ items }: GroupInterface) {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipeToSlide: true,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Box sx={{ backgroundColor: "#000" }}>
            <Slider {...settings}>
                {
                    items?.map((item: any) =>
                        <>
                            {renderComponentUtility(item)}
                        </>)
                }
            </Slider>
        </Box>
    )
}
