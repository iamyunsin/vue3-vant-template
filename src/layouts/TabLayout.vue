<template>
  <div class="tab-layout">
    <van-nav-bar :title="route.meta.title" />
    <div class="tab-layout-body">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="activeModel" @change="handleChange">
      <van-tabbar-item v-for="(tab, index) in tabs" :key="index" :icon="tab.icon">{{ tab.label }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup name="TabLayout" lang="tsx">
  const activeModel = defineModel<number>();

  const router = useRouter();
  const route = useRoute();

  const handleChange = (index: number) => {
    activeModel.value = index;
    const tab = tabs[index];
    router.push(tab.path);
  };

  const tabs = reactive([
    {
        label: '首页',
        icon: 'home-o',
        path: '/home',
    },
    {
        name: '设置',
        icon: 'setting-o',
        path: '/settings',
    },
  ]);
</script>

<style lang="less" scoped>
  .tab-layout {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    &-nav {
      height: 50px;
    }

    &-body {
      flex: 1;
      overflow: auto;
    }

    &-footer {

    }
  }
</style>