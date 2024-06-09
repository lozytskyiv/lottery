import { createStore } from 'vuex'

interface State {
  rotateWheel: boolean,
  showTicketsTable: boolean,
  showSettings: boolean,
  showWelcome: boolean,
  timer: number,
  balance: number,
  tickets: string[],
  winningTicket: number,
  win: number,
  footerTicketsPosition: {
    top: string,
    left: string,
  },
  showWinningModal: boolean,
}

export default createStore({
  state: {
    rotateWheel: false,
    showTicketsTable: false,
    showWelcome: false,
    showSettings: false,
    timer: -1,
    balance: 3,
    tickets: [],
    winningTicket: 0,
    win: 0,
    footerTicketsPosition: {
      top: "0px",
      left: "0px",
    },
    showWinningModal: false
  } as State,
  getters: {
    timer: state => state.timer
  },
  mutations: {
    decrementTimer(state) {
      state.timer--;
    },
    setTimer(state, value) {
      state.timer = value;
    },
    toggleSettingsMenu(state) {
      state.showSettings = !state.showSettings;
    },
    setBalance(state, value) {
      state.balance = value;
    },
    buyTicket(state, ticketNumber: string) {
      if (state.balance !== 0) {
        state.tickets.unshift(ticketNumber);
        state.balance--;
      }
    },
    clearTickets(state) {
      state.tickets = [];
    },
    toggleTicketsTable(state) {
      state.showTicketsTable = !state.showTicketsTable
    },
    startGame(state) {
      state.showWelcome = false;
      state.showTicketsTable = true;
      state.showWinningModal = false;
      state.rotateWheel = true;
      state.winningTicket = Math.floor(Math.random() * 10) + 1;
      state.timer = 15;
    },
    closeBets(state) {
      state.showTicketsTable = false;
    },
    endGame(state) {
      state.rotateWheel = false;
      const win = state.tickets.filter(t => Number(t) === state.winningTicket).length * 2;
      state.win = win;
      state.balance = state.balance + win;
      state.tickets = [];
      state.showWinningModal = true;
    },
    setFooterTicketsPosition(state, position) {
      state.footerTicketsPosition.left = position.left;
      state.footerTicketsPosition.top = position.top;
    },
    showWelcomeModal(state) {
      state.showWelcome = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
