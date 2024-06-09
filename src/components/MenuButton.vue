<template>
  <div class="menuButton" @click="$store.commit('toggleSettingsMenu')">
    |||
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
})
</script>

<style scoped>
  .menuButton {
    border: 1px solid whitesmoke;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>