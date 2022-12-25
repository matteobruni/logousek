import React, { useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Modal from '../components/modal'
import Backdrop from '../components/modal/backdrop'
import ModalContext from '../contexts/modal-context'
import CoreContext from '../contexts/core-context'
import colors from '../constants/colors'
// import { DndProvider } from 'react-dnd'
// import {TouchBackend} from "react-dnd-touch-backend";
// import { MultiBackend, TouchTransition, MouseTransition } from "react-dnd-multi-backend";
// import { HTML5Backend } from "react-dnd-html5-backend";

// import { DndProvider } from "react-dnd-multi-backend";
// import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { useDarkMode } from '../hooks/useDarkmode'
import AnimatedCursor from '../utils/AnimatedCursor'


// const CUSTOM_HTML5_TO_TOUCH = {
//   backends: [
//     {
//       backend: HTML5Backend,
//       transition: MouseTransition
//     },
//     {
//       backend: TouchBackend,
//       options: { enableMouseEvents: true },
//       transition: TouchTransition,
//       skipDispatchOnTransition: true
//     }
//   ]
// };

function MyApp ({ Component, pageProps }) {
  const [theme, changeTheme] = useDarkMode()
  const modalRef = useRef(null)
  const backdropRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // const loader = document.getElementById('loaderScreenWrapper')
      // if (loader)
      //     loader.style.display = 'none';
    }
  }, [])

  const showModal = (header, content) => {
    modalRef.current.show(header, content)
    backdropRef.current.show(header, content)
  }

  const closeModal = () => {
    modalRef.current.close()
    closeBackdrop()
  }

  const closeBackdrop = () => {
    backdropRef.current.close()
  }

  const lightTheme = {
    colors: colors.lightColors
  }

  const darkTheme = {
    colors: colors.darkColors
  }

  function getDropTargetElementsAtPoint (x, y, dropTargets) {
    return dropTargets.filter((t) => {
      const rect = t.getBoundingClientRect()
      return (
        x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
      )
    })
  }

  // use custom function only if elementsFromPoint is not supported
  const backendOptions = {
    getDropTargetElementsAtPoint,
    enableMouseEvents: true,
    enableTouchEvents: true
  }

  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    
    <AnimatePresence mode="wait">
      <AnimatedCursor
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
      />
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
    </AnimatePresence>
  )
}

export default MyApp
