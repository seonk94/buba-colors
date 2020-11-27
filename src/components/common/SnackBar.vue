<template>
  <div>
    <div class="snack-bar" :class="{ active : state.isActive }">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    timeout: {
      type: Number,
      default: 2000,
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const state = reactive({
      activeTimeout : -1,
      isActive: !!props.modelValue,
    })

    watch(
      () => props.modelValue,
      (val) => {
        state.isActive = !!val
      }
    );

    watch(
      () => state.isActive,
      (val) => {
        !!val !== props.modelValue && context.emit('update:modelValue', val);
        setTimeout();
      }
    )

    function setTimeout() {
      window.clearTimeout(state.activeTimeout);

      if (state.isActive && props.timeout) {
        state.activeTimeout = window.setTimeout(() => {
          state.isActive = false
        }, props.timeout)
      }
    }

    return { 
      state,
      setTimeout
    }
  },
})
</script>

<style lang="scss" scoped>
.snack-bar {
  position: fixed;
  background: #aaa;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;

  &.active {
    display: block;
  }
}
</style>