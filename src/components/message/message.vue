<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Message',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup () {
  },
});
</script>

<style lang="less" scoped>
.message {

}
</style>