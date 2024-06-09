<template>
  <div class="gameContent" :class="$store.state.showTicketsTable ? 'left' : ''">
    <div>Game {{$store.state.winningTicket}} {{$store.state.timer}}</div>
    <DrumContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {mapState} from 'vuex';
import DrumContainer from '@/components/DrumContainer';


export default defineComponent({
  name: "GameContent",
  components: {
    DrumContainer
  },
  mounted() {
    this.$store.commit('startGame');
  },
  computed: {...mapState['timer']},
  created() {
    this.unwatch = this.$store.watch(
        (state, getters) => getters.timer,
        (newValue, oldValue) => {
          if (oldValue === 0 && newValue < 0) {
            this.$store.commit('closeBets');
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
.gameContent {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 30px;
  padding-left: 35vw;
  background: darkgreen;
  color: black;
  transition: 0.4s;
}

.gameContent.left {
  padding-left: 30px;
}

.buttons {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.button {
  padding: 10px 20px;
  font-size: 20px;
  border: 1px solid whitesmoke;
  color: whitesmoke;
  cursor: pointer;
}
</style>