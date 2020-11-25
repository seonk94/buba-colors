<template>
  <div class="color-button-box">
    <button class="color-button" :class="{ active: isActive }" @click="copyToClipboard">
        <div class="circle" :style="circleStyle">
        </div>
    </button>
  </div>
</template>

<script lang="ts">
import { key } from '@/store';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
    props: {
        color: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const store = useStore(key);
        const circleStyle = computed(() => ({ background: props.color }))
        const isActive = computed(() => props.color === store.state.color)

        function copyToClipboard() {
            const tempTextareaElement = document.createElement('textarea');
            tempTextareaElement.value = props.color;
            document.body.appendChild(tempTextareaElement);

            tempTextareaElement.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextareaElement);
            store.dispatch('clickColor', props.color);
        }

        return {
            isActive,
            circleStyle,
            copyToClipboard
        }
    }
})
</script>

<style lang="scss" scoped>
.color-button-box {
    padding: 12px;
    flex: 1;
    text-align: center;
    .color-button {
        box-shadow: -6px -6px 9px 0px white, 6px 6px 9px rgba(0, 0, 0, 0.4);
        font-size: 20px;
        
        width: 60px;
        height: 60px;
        
        border: none;
        border-radius: 30px;
        
        background: var(--bg-color);
        
        cursor: pointer;
        
        &:hover {
            box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
        }
        
        &:active {
            box-shadow: inset -6px -6px 9px 0px rgba(255,255,255,0.4), inset 6px 6px 9px rgba(44, 41, 41, 0.4);
        }

        &.active {
            box-shadow: inset -6px -6px 9px 0px rgba(255,255,255,0.4), inset 6px 6px 9px rgba(44, 41, 41, 0.4);
            .circle {
                box-shadow: -6px -6px 9px 0px white, 6px 6px 9px rgba(0, 0, 0, 0.4);
            }
        }

        text-shadow: 1px 1px 0 #FFF;
        outline: 0;
        transition: all 0.2s ease-in-out;
        
        &.unit {
            border-radius: 8px;
            line-height: 0;
            width: 16px*3;
            height: 16px*3;
            display:inline-flex;
            justify-content: center;
            align-items:center;
            margin: 0 16px/2;
            
            .icon {
                margin-right: 0; 
            }
        }

        .circle {
            margin: auto;
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
}

</style>