import { Button } from '@mui/material'
import React from 'react'

function RenderActionItem({
    title,
    type,
    variant,
    onClick,
    disabled,
    endIcon
}: any) {
    return (
        <>
            <Button
                variant={variant}
                onClick={onClick}
                disabled={disabled}
                endIcon={endIcon}>
                {title}
            </Button>
        </>
    )
}

export default RenderActionItem