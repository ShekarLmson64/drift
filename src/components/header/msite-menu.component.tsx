import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { MobileMenuStack, PositionBox } from './header.styles'
import Link from 'next/link';
import Dimage from '../custom/customImage/customImage';
import { MobilePxToVw } from '@/utils/pxToVw';
import MobileHeaderMenu from './msite-header-menu.component';

export default function MobileMenu({ handleClose }: any) {
    return (
        <MobileMenuStack>
            <PositionBox onClick={handleClose}>
                <CloseRoundedIcon />
            </PositionBox>
            <Link href={"/"} onClick={handleClose}>
                <Dimage
                    src={"/icons/home-icon.png"}
                    alt={"home-icon"}
                    width={"100%"}
                    height={"auto"}
                    styles={{ maxWidth: MobilePxToVw(160) }}
                />
            </Link>
            <MobileHeaderMenu />
        </MobileMenuStack>
    )
}
