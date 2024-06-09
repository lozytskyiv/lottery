<template>
  <div
      ref="ticketRef"
      class="ticket"
      :class="[$props.size === 'big' ? 'bigTicket' : 'smallTicket', showAnimation || $store.state.balance <= 0 ? 'disabled' : '']"
      @click="$props.size === 'big' ? showTicketAnimation() : undefined"
  >
    {{$props.number}}
  </div>
  <div class="ticketAnimationContainer" v-if="showAnimation" :style="cssVars">
    <div
        class="ticket animated"
        :style="{width, height, top: positionTop, left: positionLeft}"
    >
      {{$props.number}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "TheTicket",
  data() {
    return {
      showAnimation: false,
      positionLeft: 0,
      positionTop: 0,
      width: 0,
      height: 0,
    }
  },
  props: {
    number: String,
    size: String,
  },
  methods: {
    showTicketAnimation() {
      if (this.$store.state.balance > 0) {
        this.showAnimation = true;

        setTimeout(() => {
          this.$store.commit('buyTicket', this.$props.number);
          this.showAnimation = false;
        }, 1000)
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.positionLeft = this.$refs.ticketRef.getBoundingClientRect().left + 'px';
      this.positionTop = this.$refs.ticketRef.getBoundingClientRect().top + 'px';
      this.width = this.$refs.ticketRef.getBoundingClientRect().width + 'px';
      this.height = this.$refs.ticketRef.getBoundingClientRect().height + 'px';
    }, 500)
  },
  computed: {
    cssVars() {
      console.log("", this.$store.state)
      return {
        '--bigTicketWidth': this.width,
        '--bigTicketHeight': this.height,
        '--ticketStartPosLeft': this.positionLeft,
        '--ticketStartPosTop': this.positionTop,
        '--ticketFinishPosLeft': this.$store.state.footerTicketsPosition.left,
        '--ticketFinishPosTop': this.$store.state.footerTicketsPosition.top,
      }
    }
  }
})
</script>

<style scoped>
  .ticket {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 30px;
    background-image: url("../assets/ticket.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    color: black;
    transition: 0.1s;
  }

  .ticket.disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  .ticket.bigTicket {
    cursor: pointer;
  }

  .ticket.smallTicket {
    width: 55px;
    height: 56px;
    position: absolute;
  }

  .ticketAnimationContainer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    pointer-events: none;
  }

  .ticketAnimationContainer .ticket {
    position: absolute;
  }

  .ticketAnimationContainer .ticket.animated {
    animation: animate 1s;
  }

  @keyframes animate {
    0% {
      width: var(--bigTicketWidth);
      height: var(--bigTicketHeight);
      left: var(--ticketStartPosLeft);
      top: var(--ticketStartPosTop);
    }

    100% {
      width: 55px;
      height: 56px;
      left: var(--ticketFinishPosLeft);
      top: var(--ticketFinishPosTop);
    }
  }
</style>