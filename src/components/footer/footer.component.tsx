import React from 'react'
import { ColumnStack, DynamicStack, FooterBox } from './footer.styles'
import FooterList from './footerList.component'
import footerData from "./footerItems.json"
import { Box, Stack, Typography, alpha } from '@mui/material'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { useMobileCheck } from '@/customHooks/mobileCheck'

export default function Footer() {
    const { description, items, rights } = footerData
    const isMobile = useMobileCheck()
    return (
        <FooterBox>
            <DynamicStack>
                <ColumnStack maxWidth={isMobile ? "unset" : DesktopPxToVw(400)}>
                    <Dimage
                        src={"/icons/home-icon.png"}
                        alt={"home-icon"}
                        width={'100%'}
                        height={'auto'}
                        styles={{
                            maxWidth: isMobile ? MobilePxToVw(120) : DesktopPxToVw(120),
                            mixBlendMode: "multiply"
                        }}
                    />
                    <Typography color={alpha("#000", 0.8)}>{description}</Typography>
                </ColumnStack>
                <FooterList items={items} />
            </DynamicStack>
            <Box py={isMobile ? MobilePxToVw(30) : DesktopPxToVw(30)}>
                <hr />
            </Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography color={alpha("#000", 0.6)} variant="caption">{rights}</Typography>
            </Stack>
        </FooterBox>
    )
}
