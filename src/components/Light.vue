<template>
  <graphics
      :x="$props.x"
      :y="$props.y"
      @render="graphics => {
        graphics.clear()
        graphics.beginFill(0xDFAE00)
        graphics.drawCircle(0, 0, size)
        graphics.endFill()
      }"
  >
    <blur-filter :strength="4" :blur="5" />
  </graphics>
  <graphics
      :x="$props.x"
      :y="$props.y"
      :alpha="0.5"
      @render="graphics => {
        graphics.clear()
        graphics.beginFill(0xD9A900)
        graphics.drawCircle(0, 0, 13)
        graphics.endFill()
      }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onTick } from 'vue3-pixi';

interface IProps {
  x: number,
  y: number,
  index: number
}

export default defineComponent({
  name: "TheLight",
  data() {
    return {
      count: 0,
      size: 0,
    }
  },
  props: {
    x: String,
    y: String,
    index: String,
  },
  mounted() {
    onTick((delta) => {
      this.count += (this.$props.index % 2 + delta) * 0.05
      this.size = 12 + Math.sin(this.count) * 5
    })
  },
  methods: {

  }
})
</script>

<style scoped>

</style>