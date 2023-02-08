
import Ladybug from '../components/svg/templates/ladybug'
import Car from '../components/svg/templates/car'
import Lego from '../components/svg/templates/lego'

export type svgConfType = { name: string, svgs: React.FC<any>[] }

export const threePictures: svgConfType[] = [
    {
        name: "test",
        svgs: [
            Ladybug,
            Car,
            Lego
        ]
    }
]