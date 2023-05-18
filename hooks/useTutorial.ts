import React, { useEffect, useState } from "react"
import { css } from "styled-components";

export type TutorialConfigType = {
    text: string,
    sound: string,
    higlighttedIds?: string[],
    confirm: boolean,
    waitMilis: number
}[]

const pump = `
@keyframes beat {
    0%, 50%, 100% { 
        transform: scale(1.2, 1.2);
        box-shadow: 0 0 20px 5px #F0E400;
 }
    30%, 80% { transform: scale(0.85, 0.9); 
box-shadow: 0 0 6px #E0681B;}
}
animation: 3s ease 0s infinite beat;

background-color: red;
`

export const useTutorial = (config: TutorialConfigType) => {
    const [isTutorialOpened, setIsTutorialOpened] = useState(false);
    const [index, setIndex] = useState<number | undefined>()
    const [_document, set_document] = useState<any>(null)


    useEffect(() => {
        set_document(document)
    }, [])

    const runTutorial = () => {
        setIsTutorialOpened(true)
        next();
    }

    const getText = () => {
        if (typeof index === "number") {
            return config[index]?.text
        }
        return null;
    }

    const next = () => {
        const newIndex = typeof index === "number" ? index + 1 : 0
        const higlighttedIds = config[newIndex]?.higlighttedIds;

        if (_document && Array.isArray(higlighttedIds)) {
            higlighttedIds.map(higlighttedId => {
                _document.getElementById(higlighttedId)?.classList.add("highlight");
            })
        }

        setIndex(newIndex)

    }

    const reset = () => {
        setIsTutorialOpened(false);
        setIndex(undefined)
    }

    return { runTutorial, text: getText(), index, isTutorialOpened, reset, next }
};