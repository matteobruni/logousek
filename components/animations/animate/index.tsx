// import React, { useRef } from 'react'
// import useElementOnScreen from '../hooks/useElementOnScreen'
// function Animate ({ from, to, children }) {
//   const ref = useRef(null)
//   const onScreen = useElementOnScreen(ref)
//   const defaultStyles = {
//     transition: '1500ms linear'
//   }
//   return (
//     <div
//       ref={ref}
//       style={
//         onScreen
//           ? {
//               ...defaultStyles,
//               ...to
//             }
//           : {
//               ...defaultStyles,
//               ...from
//             }
//       }
//     >
//       {children}
//     </div>
//   )
// }

// export default Animate

import React, { useRef } from 'react'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { AnimateWrapper } from './styled'

export type StylesType = {
  opacity: number,
  translateTo: string,
  scale: number
}

type AnimateProps = {fromStyles: StylesType, toStyles: StylesType, children: React.ReactElement}

const Animate: React.FC<AnimateProps> = ({ fromStyles, toStyles, children }) => {
  const ref = useRef(null)
  const onScreen = useElementOnScreen(ref)
  const usedStyles = onScreen ? toStyles : fromStyles
  return (
    <AnimateWrapper
      ref={ref}
      opacity={usedStyles.opacity}
      translateTo={usedStyles.translateTo}
      scale={usedStyles.scale}
    >
      {children}
    </AnimateWrapper>
  )
}

export default Animate
