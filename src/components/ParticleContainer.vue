<template>
  <Container ref="particleContainer" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Emitter} from "@pixi/particle-emitter";
import * as PIXI from "pixi.js";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const coin = require('@/assets/coin.png');

export default defineComponent({
  name: "ParticleContainer",
  mounted() {
    setTimeout(() => {
      const emitter = new Emitter(
          this.$refs.particleContainer,
          {
            lifetime: {
              min: 1.3,
              max: 1.3
            },
            frequency: 0.001,
            spawnChance: 1,
            particlesPerWave: 1,
            emitterLifetime: 1.2,
            maxParticles: 30,
            pos: {
              x: 300,
              y: 200
            },
            addAtBack: false,
            behaviors: [
              {
                type: 'alpha',
                config: {
                  alpha: {
                    list: [
                      {
                        value: 1,
                        time: 1
                      },
                      {
                        value: 0.9,
                        time: 1
                      }
                    ],
                  },
                }
              },
              {
                type: 'scale',
                config: {
                  scale: {
                    list: [
                      {
                        value: 1,
                        time: 1
                      },
                      {
                        value: 0.9,
                        time: 1
                      }
                    ],
                  },
                }
              },

              {
                type: 'moveSpeed',
                config: {
                  speed: {
                    list: [
                      {
                        value: 200,
                        time: 0
                      },
                      {
                        value: 50,
                        time: 1
                      }
                    ],
                    isStepped: false
                  },
                }
              },
              {
                type: 'rotationStatic',
                config: {
                  min: 180,
                  max: 360
                }
              },
              {
                type: 'spawnShape',
                config: {
                  type: 'circle',
                  data: {
                    x: 0,
                    y: 0,
                    radius: 50
                  }
                }
              },
              {
                type: 'textureSingle',
                config: {
                  texture: PIXI.Texture.from(coin)
                }
              }
            ]
          }
      );

      let elapsed = Date.now();

      const update = () => {
        const now = Date.now();
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
        requestAnimationFrame(update);
      };

      update();

      emitter.emit = true;

    }, 100)
  },
})
</script>