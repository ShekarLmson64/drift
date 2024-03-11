import React from 'react'
import { ColumnStack, FooterBox } from './footer.styles'
import FooterList from './footerList.component'
import footerData from "./footerItems.json"
import { Box, Stack, Typography } from '@mui/material'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw } from '@/utils/pxToVw'

export default function Footer() {
    const { description, items, rights } = footerData
    return (
        <FooterBox>
            <Stack flexDirection={"row"} width={"100%"} columnGap={DesktopPxToVw(80)}>
                <ColumnStack maxWidth={DesktopPxToVw(400)}>
                    <Dimage
                        src={"/icons/home-icon.png"}
                        alt={"home-icon"}
                        width={'100%'}
                        height={'auto'}
                        styles={{
                            maxWidth: DesktopPxToVw(120),
                            mixBlendMode: "multiply"
                        }}
                    />
                    <Typography>{description}</Typography>
                </ColumnStack>
                <FooterList items={items} />
            </Stack>
            <Box py={DesktopPxToVw(30)}>
                <hr />
            </Box>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography>{rights}</Typography>
            </Stack>
        </FooterBox>
    )
}
