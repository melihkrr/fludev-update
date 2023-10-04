import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {loadPolygonMaskPlugin} from "tsparticles-plugin-polygon-mask";
import LogoWithoutText from "../../assets/img/logo/LogoWithoutText.svg";

function ParticlesPolygonMask(props) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);
    const options = {
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 1
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1
                }
            }
        },
        fullScreen: false,
        particles: {
            color: {
                value: "#ffffff"
            },
            links: {
                blink: false,
                color: "#ffffff",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                attract: {
                    rotate: {
                        x: 600,
                        y: 1200
                    }
                },
                enable: true,
                outModes: "bounce",
                speed: 0.5
            },
            number: {
                limit: 0,
                value: 200
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                },
                value: {
                    min: 0.05,
                    max: 0.4
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 1
            }
        },
        polygon: {
            "draw": {
                "enable": true,
                "stroke": {
                    "color": {
                        "value": "rgba(255,255,255,0.2)"
                    },
                    "width": 0.5,
                    "opacity": 0.2
                }
            },
            enable: true,
            move: {
                radius: 10
            },
            inline: {
                arrangement: "equidistant"
            },
            position: {
                x: 26,
                y: 32
            },
            scale: 1.2,
            
            url: LogoWithoutText
        },

    }

    return (<Particles id="tsparticles" options={options} init={particlesInit} />);
}

export default ParticlesPolygonMask;