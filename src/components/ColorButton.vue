<template>
  <div class="color-button-box">
    <button class="color-button">
        <div class="circle" :style="circleStyle">
        </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';


export default defineComponent({
    props: {
        color: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const circleStyle = computed(() => ({ background: props.color }))

        return {
            circleStyle
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
        // box-shadow: -6px -6px 9px 0px white, 6px 6px 9px rgba(0, 0, 0, 0.4);
        // font-size: 20px;
        
        // width: 60px;
        // height: 60px;
        
        // border: none;
        // border-radius: 30px;
        
        // background: #eee;
        
        // cursor: pointer;
        
        // &:hover, &:active {
        //     background: #aaa;
        // }
        
        // &:active {
        //     box-shadow: inset -6px -6px 9px 0px rgba(255,255,255,0.4), inset 6px 6px 9px rgba(44, 41, 41, 0.4)
        // }
        border: 0;
        outline: 0;
        border-radius: 50%;
        padding: 12px;
        background-color: #efefef;
        text-shadow: 1px 1px 0 #FFF;
        color:#61677C;
        font-weight: bold;
        box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 600;
        
        &:hover {
            box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
        }
        
        &:active {
            box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
        }
        
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
    }
}
.circle {
    margin: auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;

}
</style>