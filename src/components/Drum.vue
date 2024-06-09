<template>
  <div class="drum">
    <img class="drumBG" src="@/assets/drum.svg" />
    <img ref="drumLine1" class="drumLine drumLine1" src="@/assets/drumLine.svg" />
    <img ref="drumLine2" class="drumLine drumLine2" src="@/assets/drumLine.svg" />
    <img ref="drumLine3" class="drumLine drumLine3" src="@/assets/drumLine.svg" />
    <div ref="lotteryBalls" class="lotteryBall" v-for="n in 10" :key="n" :style="{left: ((n - 1) * 3.5) + 0.75 + 'vw', zIndex: n, transform: 'rotate(' + Math.random() * 360 + 'deg)'}">
      <img src="@/assets/lotteryBall.svg" />
      <p>{{n}}</p>
    </div>
    <div ref="winBall" class="lotteryBall winBall">
      <img src="@/assets/lotteryBall.svg" />
      <p>{{$store.state.winningTicket}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from 'gsap';

const timelineLines = gsap.timeline();
const timelineBalls = gsap.timeline();
const timelineWin = gsap.timeline();

export default defineComponent({
  name: "TheDrum",
  mounted() {
    for (let i = 0; i <= 17; i++) {
      timelineLines.fromTo(this.$refs.drumLine1, {y: 0}, {y: "21.3vw", duration: 1, ease: 'none'}, 0 + i);
      timelineLines.fromTo(this.$refs.drumLine2, {y: 0}, {y: "14.3vw", duration: 0.66, ease: 'none'}, 0 + i);
      timelineLines.fromTo(this.$refs.drumLine2, {y: "-7vw"}, {y: 0, duration: 0.33, ease: 'none'}, 0.66 + i);
      timelineLines.fromTo(this.$refs.drumLine3, {y: 0}, {y: "7.3vw", duration: 0.33, ease: 'none'}, 0 + i);
      timelineLines.fromTo(this.$refs.drumLine3, {y: "-14vw"}, {y: 0, duration: 0.66, ease: 'none'}, 0.33 + i);
    }

    this.$refs.lotteryBalls.forEach((lotteryBall) => {
      const r = Math.random()
      for (let i = 0; i <= 17 / 0.6; i++) {
        timelineBalls.fromTo(lotteryBall, {y: '0'}, {y: "-15.2vw", duration: 0.3, ease: 'none'}, r + i * 0.6);
        timelineBalls.to(lotteryBall, {y: "0", duration: 0.3, ease: 'none'}, r + i * 0.6 + 0.3);
      }
    })

    timelineWin.fromTo(this.$refs.winBall, {opacity: 0}, {opacity: 1, duration: 0.1, ease: 'none'}, 0);
    timelineWin.to(this.$refs.winBall, {y: "-20vw", duration: 0.5, ease: 'none'}, 0.1);
    timelineWin.to(this.$refs.winBall, {zIndex: 21, duration: 0.1, ease: 'none'}, 0.6);
    timelineWin.to(this.$refs.winBall, {y: "-8vw", scale: 2, duration: 1}, 0.7)


    timelineLines.pause(1);
    timelineBalls.pause(0);
    timelineWin.pause(0);
    timelineWin.call(() => {
      this.$store.commit('endGame');

      setTimeout(() => {
        this.$store.commit('startGame');
      }, 5000)
    }, [], 1.7)
  },
  created() {
    this.unwatch = this.$store.watch(
        (state, getters) => getters.timer,
        (newValue, oldValue) => {
          if (oldValue <= 0 && newValue === 15) {
            timelineLines.restart();
            timelineBalls.restart();
            timelineWin.pause(0)
          }
          if (oldValue === 0 && newValue < 0) {
            setTimeout(() => {
              timelineWin.restart();
            }, 2600)
          }
        },
    );
  },
  beforeUnmount() {
    this.unwatch();
  },
})
</script>

<style scoped>
.drum .drumBG {
  position: relative;
  z-index: 15;
  width: 100%;
  height: 100%;
}

.drum .drumLine {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 20;
}

.drum .drumLine.drumLine1 {
  top: 0;
}

.drum .drumLine.drumLine2 {
  top: 7vw;
}

.drum .drumLine.drumLine3 {
  top: 14vw;
}

.lotteryBall {
  position: absolute;
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lotteryBall img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.lotteryBall p {
  z-index: 2;
  position: relative;
  font-size: 20px;
}

.lotteryBall {
  top: 16.2vw;
}

.lotteryBall.winBall {
  z-index: 0;
  opacity: 0;
  left: 16.5vw;
}

</style>