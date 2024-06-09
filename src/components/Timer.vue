<template>
  <div class="timer">
    {{$store.state.timer}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let timerId

export default defineComponent({
  name: "TheTimer",
  mounted() {
    this.$store.commit('startGame');
    if (this.$store.state.timer === 15) {
      timerId = setInterval(() => {
        this.$store.commit('setTimer', this.$store.state.timer - 1)
      }, 1000);
    }
  },
  unmounted() {
    clearInterval(timerId);
  }
})
</script>

<style scoped>
.timer {
  border: 1px solid whitesmoke;
  padding: 10px 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

</style>