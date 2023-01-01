import React, { useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Modal, { ModalInterfaceType } from '../components/modal'
import Backdrop, { BackdropInterfaceType } from '../components/modal/backdrop'
import ModalContext from '../contexts/modal-context'
import CoreContext from '../contexts/core-context'
import colors from '../constants/colors'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDarkMode } from '../hooks/useDarkmode'
import { appWithTranslation } from 'next-i18next'
import { showModalModalInfoParam } from '../contexts/modal-context'
import { ParallaxProvider } from 'react-scroll-parallax'

import AnimatedCursor from '../utils/AnimatedCursor'

interface ThemeType {
  colors: {
    primary: string
    secondary: string
    tertiary: string
    fourty: string
    fifty: string
    sixty: string
    seventy: string
    eighty: string
    white: string
    lightGrey: string
    darkGreen: string
  }
}

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  const [theme, changeTheme] = useDarkMode()
  const modalRef = useRef<ModalInterfaceType>(null)
  const backdropRef = useRef<BackdropInterfaceType>(null)

  const showModal = (modalDetail: showModalModalInfoParam) => {
    typeof modalRef?.current?.show === 'function' && modalRef?.current?.show(modalDetail)
    backdropRef?.current?.show()
  }

  const closeModal = () => {
    typeof modalRef?.current?.close === 'function' && modalRef.current.close()
    closeBackdrop()
  }

  const closeBackdrop = () => {
    backdropRef?.current?.close()
  }

  const lightTheme = {
    colors: colors.lightColors
  }

  const darkTheme = {
    colors: colors.darkColors
  }

  function getDropTargetElementsAtPoint(x: number, y: number, dropTargets: any[]) {
    return dropTargets.filter((t) => {
      const rect = t.getBoundingClientRect()
      return (
        x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
      )
    })
  }

  const backendOptions = {
    getDropTargetElementsAtPoint,
    enableMouseEvents: true,
    enableTouchEvents: true
  }

  const themeMode: ThemeType = theme === 'light' ? lightTheme : darkTheme
  return (

    <AnimatePresence mode="wait">
      <ParallaxProvider>
        {/* <AnimatedCursor
          innerSize={28}
          outerSize={0}
          innerScale={0.7}
          color={colors.cursorColor}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          innerStyle={{
            zIndex: 1003
          }}
        /> */}
        <DndProvider backend={TouchBackend} options={backendOptions}>
          <ThemeProvider theme={themeMode}>
            <CoreContext.Provider value={{ theme, changeTheme }}>
              <ModalContext.Provider value={{ showModal, closeModal }}>
                <Modal ref={modalRef} closeBackdrop={closeBackdrop} />
                <Backdrop ref={backdropRef}>
                  <Component {...pageProps} />
                </Backdrop>
              </ModalContext.Provider>
            </CoreContext.Provider>
          </ThemeProvider>
        </DndProvider>
      </ParallaxProvider>
    </AnimatePresence>
  )
}

export default appWithTranslation(MyApp)