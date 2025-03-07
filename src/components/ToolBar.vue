<template>
    <div
        id="ToolBar"
        @click="toggleHidden = !toggleHidden"
        :class="{ hidden: toggleHidden }"
    >
        <div class="bar">
            <select
                :value="province"
                @change="
                    $emit('update:modelValue', $event.target.value + cityNum)
                "
            >
                <option :value="p.abbr" v-for="p in provinceList">
                    {{ p.abbr }} - {{ p.province }}
                </option>
            </select>

            <input
                type="text"
                :value="cityNum"
                @input="
                    $emit(
                        'update:modelValue',
                        province + $event.target.value.toUpperCase()
                    )
                "
            />
            <button @click="rotate">旋转</button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { provinceList } from '../utils';
export default defineComponent({
    name: 'ToolBar',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        provinceList,
        toggleHidden: false,
    }),
    computed: {
        province() {
            return this.modelValue?.slice(0, 1);
        },
        cityNum() {
            return this.modelValue?.slice(1);
        },
    },
    methods: {
        rotate() {
            document.documentElement.webkitRequestFullscreen().then(() => {
                // 锁定为横屏
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation
                        .lock('landscape')
                        .then(() => console.log('方向已锁定为横屏'))
                        .catch(error => console.error('锁定失败:', error));
                }
            });
        },
    },
});
</script>
<style lang="sass" scoped>
#ToolBar
    position: fixed
    z-index: 9999
    inset: 0
    color: #333
    display: flex
    align-items: flex-end
    &.hidden
        opacity: 0
    .bar
        display: flex
        display: inline-block
        gap: 20px
        background:#fff
        button
            font-size: 18px
</style>
