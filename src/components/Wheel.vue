<template>
  <div
      class="wheel"
      :style="{ ...( !!$store.state.rotateWheel  ? {transform: 'rotate('+(-5400 + ($store.state.winningTicket - 1) * (-36))+'deg)', transition: 'transform 20s'} : {})}"
  >
    <img src="@/assets/wheel.svg" />
    <p class="number" v-for="n in 10" :key="n" :id="'number'+n">{{n}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheWheel",
})
</script>

<style scoped>
.wheel {
  position: relative;
  width: 30vw;
  height: 30vw;
}

.wheel img {
  width: 100%;
  height: 100%;
}

.number {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2.7vw;
}

.number#number1 {
  left: 14.3vw;
  top: 2.34vw;
  transform: rotate(0deg);
}

.number#number2 {
  left: 21.3vw;
  top: 4.04vw;
  transform: rotate(36deg);
}

.number#number3 {
  left: 25.6vw;
  top: 9.84vw;
  transform: rotate(72deg);
}

.number#number4 {
  left: 25.9vw;
  top: 16.94vw;
  transform: rotate(108deg);
}

.number#number5 {
  left: 21.1vw;
  top: 22.64vw;
  transform: rotate(144deg);
}

.number#number6 {
  left: 14.3vw;
  top: 25.04vw;
  transform: rotate(180deg);
}

.number#number7 {
  left: 7.6vw;
  top: 22.34vw;
  transform: rotate(216deg);
}

.number#number8 {
  left: 3.6vw;
  top: 16.94vw;
  transform: rotate(252deg);
}

.number#number9 {
  left: 3.7vw;
  top: 9.84vw;
  transform: rotate(288deg);
}

.number#number10 {
  left: 7.3vw;
  top: 4.64vw;
  transform: rotate(324deg);
}

</style>