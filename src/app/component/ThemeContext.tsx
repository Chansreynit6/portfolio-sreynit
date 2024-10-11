// components/ParticlesBackground.tsx
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { initParticlesEngine, loadSlim, Container } from "tsparticles-engine";

interface ParticlesBackgroundProps {
    theme: "dark" | "light"; // Accepting theme as prop
}

const ParticlesBackground = ({ theme }: ParticlesBackgroundProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    // Set colors based on the theme
    const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
    const particleColor = theme === "dark" ? "#ffffff" : "#000000"; // Adjust for light mode

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: backgroundColor, // Use the theme color
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: particleColor, // Use the theme color
                            },
                            links: {
                                color: particleColor, // Use the theme color
                                distance: 100,
                                enable: true,
                                opacity: 0.4,
                                width: 0.5,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.7,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default ParticlesBackground;
