<template>
  <div class="color-card">
    <div class="color-card-header shadow-text">
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
    padding: 24px;

    &:last-child {
        padding-bottom: 60px;
    }
}
.color-card-header {
    display: flex;
}
.color-card-body {
    display: flex;
    flex-wrap: wrap;
}
</style>