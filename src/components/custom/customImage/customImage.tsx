import { Box } from '@mui/material'
import React from 'react'
interface ImageProps {
    src: string,
    alt: string
    width: string,
    height: string
}

export default function customImage(props: ImageProps) {
    const { src, alt, width = "auto", height = "auto" } = props
    return (
        <Box
            component={"img"}
            srcSet={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
        />
    )
}
