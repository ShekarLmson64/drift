import React from 'react'
import { ColumnStack, DynamicStack, FooterBox } from './footer.styles'
import FooterList from './footerList.component'
import footerData from "./footerItems.json"
import { Box, Stack, Typography } from '@mui/material'
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
                    <Typography>{description}</Typography>
                </ColumnStack>
                <FooterList items={items} />
            </DynamicStack>
            <Box py={DesktopPxToVw(30)}>
                <hr />
            </Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography>{rights}</Typography>
            </Stack>
        </FooterBox>
    )
}
