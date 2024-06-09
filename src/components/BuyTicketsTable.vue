<template>
  <Transition>
    <div class="buyTicketsTableBackground" v-if="$store.state.showTicketsTable">
      <div class="buyTicketsTable">
        <Ticket v-for="(ticket, i) in tickets" v-bind:key="i" :number="ticket" size="big" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticket from '@/components/Ticket.vue';

export default defineComponent({
  name: "BuyTicketsTable",
  data() {
    return {
      tickets: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  },
  components: {
    Ticket
  },
})
</script>

<style scoped>
  .buyTicketsTableBackground {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: transparent;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 1;
    transform: scale(1);
    z-index: 100;
    padding: 0 30px;
  }
  .buyTicketsTable {
    background: darkslateblue;
    width: 60vw;
    height: 60vh;
    pointer-events: auto;
    padding: 40px 30px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    border-radius: 20px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.5);
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: scale(0.2);
  }
</style>