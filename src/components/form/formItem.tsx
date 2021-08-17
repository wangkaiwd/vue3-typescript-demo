import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WFormItem',
  setup (props, { slots }) {
    return () => <div class="w-form-item">{slots.default?.()}</div>;
  }
});