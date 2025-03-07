<template>
    <div class="plate">
        <img src="../assets/img/14.bmp" class="img" />
        <div class="textWrap" :style="{ color: rule.font }">
            <div class="text">
                <span class="province">{{ province }}</span>
                <span class="city">{{ city }}</span>
                <span class="num">{{ num }}</span>
            </div>
        </div>
        <!-- <img src="../assets/.jpg" class="cover" /> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { getRules, type MODE } from '../utils';

export default defineComponent({
    name: 'Plate',
    props: {
        mode: {
            type: String as () => MODE,
            default: 'blue_all',
        },
        plate: {
            type: String,
            required: true,
        },
    },
    data: () => ({}),
    computed: {
        rule() {
            return getRules(this.mode);
        },
        province() {
            return this.plate?.slice(0, 1);
        },
        city() {
            return this.plate?.slice(1, 2);
        },
        num() {
            return this.plate?.slice(2);
        },
    },
});
</script>

<style lang="sass" scoped>
@font-face
    font-family: 'plateHz'
    src: url('../assets/plateHz.woff2') format('woff2')
    font-weight: normal
    font-style: normal
@font-face
    font-family: 'plateNum'
    src: url('../assets/plateNum.woff2') format('woff2')
    font-weight: normal
    font-style: normal

.plate
    background: url('../assets/img/11.bmp')
    position: relative
    .img
        width: 100%
    .cover
        position: absolute
        top: 0
        left: 0
        z-index: 999
        width: 100%
        opacity: 0.5
        display: none
    .textWrap
        z-index: 1
        position: absolute
        inset: 0
        vertical-align: middle
        display: flex
        align-items: center
        .text
            display: flex
            align-items: center
            position: relative
            left: -2rem
            top: -1rem
            .province
                font-size: 24rem
                font-family: 'plateHz'
            .city,.num
                font-size: 30rem
                font-family: 'plateNum'
                position: relative
            .city
                left: -5rem
                top: 1rem
            .num
                left: -3rem
                letter-spacing: -4rem
                top: 1rem
</style>
