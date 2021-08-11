<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Layout',
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.layout {

}
</style>