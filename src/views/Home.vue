<template>
  <div>
    {{ route.path === '/home' ? 'Home' : 'Setting' }}
  </div>
</template>

<script setup name="Home" lang="tsx">
const route = useRoute();
</script>
<style lang="less" scoped>
  
</style>