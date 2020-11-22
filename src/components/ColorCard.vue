<template>
  <div class="color-card">
    <div class="color-card-header">
        <h2>{{ title }}</h2>
    </div>
    <div class="color-card-body">
        <color-button v-for="color of colors" :key="color" :color="color"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorButton from './ColorButton.vue';

export default defineComponent({
    components: {
        ColorButton,
    },
    props: {
        title: String,
        colors: {
            type: Array,
            required: true,
        },
    }
})
</script>

<style lang="scss" scoped>
.color-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px auto;
    width: fit-content;
    box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
}
.color-card-header {
    display: flex;
    h2 {
        text-transform: capitalize;
        margin-right: auto;
        color: var(--primary-text-color);
        font-weight: 900;
        text-shadow: 2px 2px 4px rgba(0,0,0,.3), -2px -2px 4px rgba(255,255,255,1);
    }
}
.color-card-body {
    display: flex;
    flex-wrap: wrap;
}
</style>