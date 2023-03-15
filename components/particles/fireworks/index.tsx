import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFireworksPreset(engine);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                preset: "fireworks",

                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                emitters: {
                    direction: "top",
                    life: {
                        duration: 0.1,
                        delay: 0.1
                    }
                }

            }}
        />

    )
}

export default Fireworks
