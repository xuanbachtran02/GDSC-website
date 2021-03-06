import Particles from "react-tsparticles";

var particlesObj = {
    "particles": {
        "number": {
            "value": 7,
            "density": {
                "enable": true,
                "value_area": 1200
            }
        },
        "color": {
            "value": ["#DB4437", "#0F9D58", "#4285F4", "#F4B400"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000"
            },
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 1,
                "sync": false
            }
        },
        "size": {
            "value": 80,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 40,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#000000",
            "opacity": 1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab" 
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

export default function ParticlesAnimation(){
  return (
    <div>
        <Particles
        id="particles-js"
        options={particlesObj}
        />
    </div>
  );
};