import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WForm',
  setup (props, { slots }) {
    return () => <div class="w-form">{slots.default?.()}</div>;
  }
});