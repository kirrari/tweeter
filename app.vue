<template>
  <div :class="[darkMode ? 'dark bg-dim-900' : 'bg-white']">
    <div class="min-h-full">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- Left sidebar -->
        <section class="hidden md:block xs:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <SidebarLeft />
          </div>
        </section>
        <!-- Main content -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          <RouterView />
        </main>
        <!-- Right sidebar -->
        <section
          class="hidden col-span-12 md:block md:col-span-3 xl:col-span-4"
        >
          <div class="sticky top-0">
            <SidebarRight />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
</script>
