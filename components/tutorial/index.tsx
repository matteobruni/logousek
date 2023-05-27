import React, { useContext } from "react"
import { ThemeContext } from 'styled-components'

import Bubble from '@components/bubble'
import Logousek from '@components/svg/templates/logousek'
import { useTutorial, TutorialConfigType } from "@hooks/useTutorial"
import Button, { ButtonSizesEnum } from "@components/button"
import Blob from "@components/blob/blob"

import * as S from './styled'

const config: TutorialConfigType = [{
    text: "Ahoj, já jsem Logoušek",
    sound: "",
    confirm: true,
    waitMilis: 5000
},
{
    text: "Pro hraní hry, klikni na tlačítko hrát",
    sound: "",
    higlighttedIds: ["navbarPlayButton", "mainPlayButton", "secondaryPlayButton"],
    confirm: true,
    waitMilis: 5000
}]


const Tutorial: React.FC = () => {
    const { text, runTutorial, isTutorialOpened, reset, next } = useTutorial(config)
    const themeContext = useContext(ThemeContext)


    const startTutorial = () => {
        runTutorial();
    }

    return (
        <S.TutorialWrapper isTutorialOpened={isTutorialOpened}>
            <Blob color={themeContext.colors.red} isBlobShowed={isTutorialOpened}>
                <S.TutorialContainer isTutorialOpened={isTutorialOpened}>
                    <S.LogosekWrapper onClick={startTutorial} isTutorialOpened={isTutorialOpened}>
                        <Logousek />
                    </S.LogosekWrapper>

                    {text &&
                        (<S.BubbleWrapper>
                            <Bubble leftSide={true} desc={text} fillWidth={true} />
                            <S.ButtonRow>
                                <Button backgroundColor="green" color="white" size={ButtonSizesEnum.xs} onClick={next}>Další</Button>
                                <Button backgroundColor="red" color="white" size={ButtonSizesEnum.xs} onClick={reset}>Zavřít</Button>
                            </S.ButtonRow>
                        </S.BubbleWrapper>)
                    }
                </S.TutorialContainer>
            </Blob>
        </S.TutorialWrapper>
    )
}

export default Tutorial
