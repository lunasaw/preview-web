<template>
    <div class="permission_denied">
        <div id="tsparticles"></div>
        <div class="denied__wrapper">
            <h1>404</h1>
            <h3>
                LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page
                doesn't exist.
            </h3>
            <img id="astronaut" src="@/assets/images/astronaut.svg" />
            <img id="planet" src="@/assets/images/planet.svg" />
            <a href="#"><button class="denied__link">Go Home</button></a>
        </div>
    </div>
</template>

<script>
import { tsParticles } from "tsparticles-engine";
// import particles from "@/assets/json/presets/particles.json";

export default {
    name: "NotFound",
    data() {
        return {
            options: {},
        };
    },
    mounted() {
        this.loadParticles();
    },
    methods: {
        loadParticles() {
            var particles = {
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 1,
                        random: {
                            enable: true,
                            minimumValue: 0.1,
                        },
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: {
                            enable: true,
                            minimumValue: 1,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 4,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: false,
                    },
                },
                detectRetina: true,
            };

            // tsParticles.load("tsparticles", particles);

            tsParticles
                .load({
                    id: "tsparticles",
                    options: particles,
                })
                .then(() => {
                    console.log("callback - tsparticles config loaded");
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>

<style scoped>
@import "@/assets/css/404.css";
</style>
