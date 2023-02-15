
import { NamedImage, serialitySrcs } from '@helpers/image-helper'

export type svgConfType = { name: string, svgs: React.ReactNode[] }

export const threePictures: svgConfType[] = [
    {
        name: "paper",
        svgs: [
            <NamedImage key="paper-1" name="paper-1" src={serialitySrcs.paper} />,
            <NamedImage key="paper-2" name="paper-2" src={serialitySrcs.paper2} />,
            <NamedImage key="paper-3" name="paper-3" src={serialitySrcs.paper3} />,
        ]
    },
    {
        name: "vase",
        svgs: [
            <NamedImage key="vase-1" name="vase-1" src={serialitySrcs.vase} />,
            <NamedImage key="vase-2" name="vase-2" src={serialitySrcs.vase2} />,
            <NamedImage key="vase-3" name="vase-3" src={serialitySrcs.vase3} />,
        ]
    }
]
export const twoPictures: svgConfType[] = [
    {
        name: "banana",
        svgs: [
            <NamedImage key="banana-1" name="banana-1" src={serialitySrcs.banana} />,
            <NamedImage key="banana-2" name="banana-2" src={serialitySrcs.banana2} />
        ]
    }
]