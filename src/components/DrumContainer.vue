<template>
  <div
      class="drumContainer"
  >
    <img src="@/assets/drumStand.svg" />
    <Drum />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Drum from '@/components/Drum';

export default defineComponent({
  name: "DrumContainer",
  components: {
    Drum
  }
})
</script>

<style scoped>
  .drumContainer {
    position: relative;
    width: 40vw;
    height: 31.5vw;
  }

  .drumContainer img {
    width: 100%;
    height: 100%;
  }

  .drumContainer .drum {
    position: absolute;
    left: 1vw;
    top: 0;
    width: 38.01vw;
    height: 22.2vw;
  }
</style>