<template>
  <div class="button">
    {{$props.text}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "TheButton",
  props: {
    text: String,
  }
})

</script>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid whitesmoke;
    cursor: pointer;
  }
</style>