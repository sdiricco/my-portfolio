<template>
  <div class="flex justify-center items-center">
    <div class="px-3 py-2 w-full">
      <div class="flex flex-col items-center gap-3">
        <div class="icon-circle" :style="{'background': backgroundIcon,}">
            <Icon :name="icon" :style="{ 'font-size': '1.5rem', color: colorIcon}" />
        </div>
        <div class="w-full mt-1">
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
	icon: string,
    backgroundIcon: string
    colorIcon:string

    //'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)'
}

defineProps<IProps>()
</script>

<style scoped>
.icon-circle{
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 50%;
    height: 30px;
    min-height: 30px;
    width: 30px;
    min-width: 30px;

}
</style>