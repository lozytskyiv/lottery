<template>
  <Transition>
    <div class="welcomeModalBG" v-if="$store.state.showWelcome">
      <div class="welcomeModal">
        <p>Welcome to lottery game</p>
        <Button text="Click to start game" @click="$store.commit('startGame')" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from '@/components/Button.vue';

export default defineComponent({
  name: "WelcomeModal",
  components: {
    Button
  },
})
</script>

<style scoped>
.welcomeModalBG {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #00000088;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  z-index: 100;
  padding: 0 30px;
}
.welcomeModal {
  background: darkslateblue;
  width: 70vw;
  height: 80vh;
  pointer-events: auto;
  padding: 100px 30px;
  border-radius: 20px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.welcomeModal p {
  font-size: 60px;
}

.welcomeModal .button {
  font-size: 40px;
}

.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
</style>