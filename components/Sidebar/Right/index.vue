<template>
  <div class="flex flex-col">
    <!-- Preview Card : What's happening? -->
    <SidebarRightPreviewCard title="What's happening?">
      <SidebarRightPreviewCardItem v-for="item in whatsHappeningItems">
        <div>
          <h2 class="font-semibold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <span class="text-xs text-gray-400">{{ item.count }}</span>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card : Who to follow? -->
    <SidebarRightPreviewCard title="Who to follow?">
      <SidebarRightPreviewCardItem v-for="item in whoToFollowItems">
        <div class="flex flex-row items-center gap-3">
          <img
            class="w-12 h-12 rounded-full"
            :src="item.imgUrl"
            alt="Profile picture"
          />
          <div>
            <h2 class="font-semibold text-gray-800 text-md dark:text-white">
              {{ item.title }}
            </h2>
            <span class="text-sm text-gray-400">{{ item.handle }}</span>
          </div>
          <button
            class="hidden xl:block ml-auto px-4 py-2 rounded-full font-semibold text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-300"
            :class="defaultTransition"
          >
            Follow
          </button>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const whatsHappeningItems = ref([
  { title: 'SpaceX', count: '18.8k Tweets' },
  { title: '#CodingIsFun', count: '9.7k Tweets' },
  { title: '#artforall', count: '5.4k Tweets' },
]);

const whoToFollowItems = ref([
  {
    imgUrl: '/kirrari.jpg',
    title: 'Kirrari La Flame',
    handle: '@kirrari',
  },
  {
    imgUrl: 'https://picsum.photos/id/137/200/200',
    title: 'Solaire',
    handle: '@solaire-of-astora',
  },
  {
    imgUrl: 'https://picsum.photos/id/888/200/200',
    title: 'goombas',
    handle: '@kuribo',
  },
]);
</script>
