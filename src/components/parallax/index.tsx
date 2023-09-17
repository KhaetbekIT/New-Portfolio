import React, { useRef } from 'react'
import { IParallaxContainer } from '../../assets/interface/parallax'

const ParallaxContainer: React.FC<IParallaxContainer> = ({ children }) => {

  const parallaxScene = useRef<HTMLDivElement>(null)

  const MouseEffect = (e: any): void => {

    if (e.type === "mousemove") {
      const Scene = parallaxScene.current

      const SceneContainer = Array.from<HTMLElement>(Scene!.querySelectorAll(`[data-parallax-tsx]`))

      let x = e.clientX / Number(Scene!.offsetWidth)
      let y = e.clientY / Number(Scene?.offsetHeight)

      for (let parallax of SceneContainer) {

        let TransformX = x * Number(parallax?.dataset.parallaxTsx)
        let TransformY = y * Number(parallax.dataset.parallaxTsx)

        parallax!.style.transform = `translate(${TransformX * 0.063}rem, ${TransformY * 0.063}rem)`
      }

    } else if (e.type === "mouseleave") {

      const Scene = parallaxScene.current

      const SceneContainer = Array.from<HTMLElement>(Scene!.querySelectorAll(`[data-parallax-tsx]`))

      for (let parallax of SceneContainer) {
        parallax!.style.transform = `translate(0rem, 0rem)`
      }

    }
  }

  return (
    <React.Fragment>
      <div data-container-tsx onMouseMove={MouseEffect} ref={parallaxScene} onMouseLeave={MouseEffect}>
        {
          children
        }
      </div>
    </React.Fragment>
  )
}

export default ParallaxContainer