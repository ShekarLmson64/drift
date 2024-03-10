export function DesktopPxToVw(fontSize: number) {
    return `${(fontSize / 1920) * 100}vw`
}

export function MobilePxToVw(fontSize: number) {
    return `${(fontSize / 640) * 100}vw`
}
