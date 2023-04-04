<template>
  <NuxtLink
    to="#"
    class="flex items-center text-black p-3 w-min hover:bg-blue-100 rounded-full dark:hover:bg-dim-200 dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark">
      <slot name="icon"></slot>
    </div>
    <div
      class="hidden ml-4 text-xl xl:block"
      :class="textFont"
    >
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();
const { active } = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textFont = computed(() => (active ? 'font-semibold' : 'font-normal'));
</script>
