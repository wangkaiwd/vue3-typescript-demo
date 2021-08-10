<template>
  <todos></todos>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Todos from './components/vuex/todos.vue';

export default defineComponent({
  name: 'App',
  components: { Todos },
});
</script>
