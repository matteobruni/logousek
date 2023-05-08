import React from 'react'
import Particles from 'react-tsparticles'
import { loadConfettiPreset } from 'tsparticles-preset-confetti'

export default function Confetti() {
  const loadConfetti = async (engine: any) => {
    // await loadConfettiShape(tsparticles);
    await loadConfettiPreset(engine)
    // tsparticles.setOnClickHandler((e: any, particles: any) => {
    //     console.log(particles.length);
    // })
  }

  return (
    <Particles
      id="tsparticles"
      init={loadConfetti}
      options={{
        particles: {
          color: {
            value: ["#0000ff", "#00ff00", "#ff0000", "#ffff00"],
          },
          move: {
            direction: "top-right",
          },
        },
        preset: "confetti",
        "startCount": 100,
        "position": {
          "x": 200,
          "y": 200
        },
        "size": {
          "width": 10,
          "height": 10
        },
        "rate": {
          "delay": 0,
          "quantity": 50
        },
        emitters: {
          direction: "top",
          life: {
            duration: 2,
            delay: 1
          }
        }
      }}
    />
  )
}
