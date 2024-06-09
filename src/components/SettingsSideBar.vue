<template>
  <Transition>
    <div class="background" v-if="$store.state.showSettings"></div>
  </Transition>
  <Transition>
    <div class="settingsSideBar" v-if="$store.state.showSettings">
      <div class="settingsSideBarHeader">Settings <div class="closeButton" @click="$store.commit('toggleSettingsMenu')">X</div></div>
      <div class="settingsSideBarBody">
        <div class="settingsLine">
          <input v-model="newBalance" />
          <Button text="Set Balance" @click="setBalance" />
        </div>
        <div class="settingsLine">
          <Button text="Clear Tickets" @click="$store.commit('clearTickets')" />
        </div>
        <div class="settingsLine">
          <Button text="Toggle Tickets Table" @click="$store.commit('toggleTicketsTable')" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from '@/components/Button';

export default defineComponent({
  name: "SettingsSideBar",
  data() {
    return {
      newBalance: ''
    }
  },
  methods: {
    setBalance() {
      this.$store.commit('setBalance', this.newBalance);
      this.newBalance = '';
    }
  },
  components: {
    Button
  }
})
</script>

<style scoped>
.settingsSideBar {
  height: 100vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  background: darkslateblue;
  color: white;
  z-index: 1000;
}

.settingsSideBarHeader {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  font-size: 20px;
}

.settingsSideBarBody {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 30px;
}

.closeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid whitesmoke;
  color: whitesmoke;
  cursor: pointer;
}

.settingsSideBar.v-enter-active,
.settingsSideBar.v-leave-active {
  transition: transform 0.3s ease;
}

.settingsSideBar.v-enter-from,
.settingsSideBar.v-leave-to {
  transform: translate(-30vw);
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.8;
  z-index: 999;
}

.background.v-enter-active,
.background.v-leave-active {
  transition: opacity 0.1s ease;
}

.background.v-enter-from,
.background.v-leave-to {
  opacity: 0;
}

.settingsLine {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

input {
  flex-grow: 1;
}

</style>