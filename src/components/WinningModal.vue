<template>
  <div class="winningModal">
    <Application :width="800" :height="600" :background-alpha="0">
      <PTransition
        :duration="{ enter: 400, leave: 400 }"
        :before-enter="{ alpha: 0, scaleX: 0.25, scaleY: 0.25, x: 400, y: 300, pivotX: 300, pivotY: 200 }"
        :enter="{ alpha: 1, scaleX: 1, scaleY: 1, ease: [.51,.01,0,1.66] }"
        :leave="{ alpha: 0, scaleX: 0, scaleY: 0 }"
      >
        <graphics v-if="$store.state.showWinningModal" :scale="1" @render="onDrawRounded" >
          <text
              :x="300"
              :y="150"
              :anchor="0.5"
              :style="{ fontSize: 48, align: 'center', fill: 'white' }"
          >
            You win
          </text>
          <text
              :x="300"
              :y="250"
              :anchor="0.5"
              :style="{ fontSize: 48, align: 'center', fill: 'white' }"
          >
            {{$store.state.win}} EUR
          </text>
          <Light v-for="n in 15" :key="n" :x="((n - 1) * 38 + 33).toString()" :y="'25'" :index="n.toString()" />
          <Light v-for="n in 15" :key="n" :x="((n - 1) * 38 + 33).toString()" :y="'375'" :index="n.toString()" />
        </graphics>
      </PTransition>
    </Application>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {Application, onTick, PTransition} from 'vue3-pixi';
import type { Graphics as GraphicsIns } from 'pixi.js'
import Light from "@/components/Light.vue";

export default defineComponent({
  name: "WinningModal",
  components: {
    Light,
    Application,
    PTransition
  },
  methods: {

    onDrawRounded(e: GraphicsIns) {
      e.beginFill('#483D8B')
      e.drawRoundedRect(0, 0, 600, 400, 30)
    }
  }
})
</script>

<style scoped>
  .winningModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 30;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>