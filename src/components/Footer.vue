<template>
  <div class="footer">
    <div class="balance">
      <p>{{$store.state.balance}} EUR</p>
      <span>1 Ticket = 1 EUR</span>
    </div>
    <div class="tickets" ref="footerTickets">
      <div class="ticketWrapper" v-for="(ticket, i) in $store.state.tickets" :key="i">
        <Ticket :number="ticket" size="small" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ticket from '@/components/Ticket.vue';

export default defineComponent({
  name: "TheFooter",
  components: {
    Ticket
  },
  mounted() {
    this.$store.commit('setFooterTicketsPosition', {left: this.$refs.footerTickets.getBoundingClientRect().left + 20 + 'px', top: this.$refs.footerTickets.getBoundingClientRect().top + 10 + 'px'})
  },
})
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 20px;
  padding: 20px 30px;
  background: darkslateblue;
  color: white;
  height: 117px;
}

.balance {
  border: 1px solid whitesmoke;
  padding: 10px 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

span {
  font-size: 16px;
}

.tickets {
  border: 1px solid whitesmoke;
  padding: 10px 20px;
  flex-grow: 1;
  font-size: 20px;
  display: flex;
  gap: 10px;
  width: 80.1vw;
}

.ticketWrapper {
  flex-shrink: 1;
  position: relative;
  width: 55px;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}
</style>