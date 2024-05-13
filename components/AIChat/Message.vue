<template>
    <div class="flex">
        <div class="px-3 py-2 w-full">
            <div class="flex gap-2">
                <div class="avatar">
                    <Icon :name="icon" :style="{ 'font-size': '2rem', color: '#a1f7b9' }" />
                </div>
                <div class="w-full">
                    <div class="font-bold my-1 ">{{ role }}</div>
                    <div class="text-color w-full" v-html="value"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
	role: string,
	value: any,
	icon: string
}

defineProps<IProps>()
</script>