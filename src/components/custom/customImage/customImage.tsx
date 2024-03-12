import { Box } from '@mui/material'
import React from 'react'
interface ImageProps {
    src: string,
    alt: string
    width?: string,
    height?: string
    styles?: any
    lazy?: boolean
}

export default function Dimage(props: ImageProps) {
    const { src, alt, width = "auto", height = "auto", lazy = false, styles = {} } = props
    return (
        <Box display={"flex"}>
            <img
                srcSet={src}
                alt={alt}
                loading={lazy ? "lazy" : "eager"}
                decoding="async"
                width={width}
                height={height}
                style={{ ...styles }}
            />
        </Box>
    )
}
