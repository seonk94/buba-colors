<template>
  <footer v-if="selectedColor !== ''" :class="{ active: selectedColor !== '' }">
    <div class="shadow-text">
      Selected Color
    </div>
    <div class="spacer">

    </div>
    <div class="color-info shadow-text">
      <div class="color-info-square" :style="squareStyle" />
      {{ selectedColor }}
    </div>
  </footer>  
</template>

<script lang="ts">
import { key } from '@/store';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
  setup() {
    const store = useStore(key);
    const selectedColor = computed(() => store.state.color);
    const squareStyle = computed(() => ({ background: store.state.color }))

    return {
      selectedColor,
      squareStyle
    }
  }
})
</script>

<style lang="scss" scoped>
footer {
  display: none;
  position: fixed;
  bottom: 0;
  height: 56px;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &.active {
    display: flex;
  }

  .spacer {
    flex-grow: 1 !important;
  }
  .color-info {
    display: flex;
    align-items: center;
    .color-info-square {
      margin-right: 8px;
      height: 16px;
      width: 16px;
    }
}
}
</style>