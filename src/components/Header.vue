<template>
  <div class="header">
    <MenuButton />
    <div class="timerWrapper">
      <Timer v-if="$store.state.timer >= 0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuButton from '@/components/MenuButton.vue';
import Timer from '@/components/Timer.vue';

export default defineComponent({
  name: "TheHeader",
  components: {
    MenuButton,
    Timer,
  }
})
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px 30px;
    background: darkslateblue;
    color: white;
    gap: 20px;
    height: 12vh;
  }

  .timerWrapper {
    flex-grow: 1;
  }
</style>