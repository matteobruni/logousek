// import React, { useRef } from 'react'
// import useElementOnScreen from '../hooks/useElementOnScreen'
// function Animate ({ from, to, children }) {
//   const ref = useRef(null)
//   const onScreen = useElementOnScreen(ref)
//   const defaultStyles = {
//     transition: '1500ms linear'
//   }
//   console.log('onScreen', onScreen)
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
function Animate ({ fromStyles, toStyles, children }) {
  const ref = useRef(null)
  const onScreen = useElementOnScreen(ref)
  const usedStyles = onScreen ? toStyles : fromStyles
  return (
    <AnimateWrapper
      ref={ref}
      opacity={usedStyles.opacity}
      translate={usedStyles.translate}
      scale={usedStyles.scale}
    >
      {children}
    </AnimateWrapper>
  )
}

export default Animate
