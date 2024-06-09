<template>
  <div class="lotteryBall">
    <p>{{$props.number}}</p>
    <img src="@/assets/lotteryBall.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LotteryBall",
  props: {
    number: String
  }
})
</script>

<style scoped>
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

</style>