<template>
  <div class="app">
    <Header />
    <SettingsSideBar />
    <BuyTicketsTable />
    <GameContent />
    <WinningModal />
    <WelcomeModal />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from '@/components/Footer.vue';
import GameContent from '@/components/GameContent.vue';
import SettingsSideBar from '@/components/SettingsSideBar.vue';
import BuyTicketsTable from '@/components/BuyTicketsTable.vue';
import WinningModal from "@/components/WinningModal.vue";
import WelcomeModal from "@/components/WelcomeModal.vue";

export default defineComponent({
  name: 'App',
  components: {
    WinningModal,
    Header,
    Footer,
    GameContent,
    SettingsSideBar,
    BuyTicketsTable,
    WelcomeModal,
  }
});
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
