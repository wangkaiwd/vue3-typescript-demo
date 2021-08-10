<template>
  <div>
    <a-button type="primary" @click="onClick">添加待办</a-button>
    <a-button type="primary" @click="onReset">重置</a-button>
    <br>
    {{ counter }}
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Todo } from '../../store/modules/todo';
import { useStore } from '../../store';

export default defineComponent({
  name: 'Todos',
  components: {},
  setup () {
    const i = ref(1);
    const store = useStore();
    const counter = computed(() => store.state.counter);
    const addTodos = (payload: Todo) => store.commit('todo/addTodos', payload);
    const todos = computed(() => store.state.todo!.todos);
    const onClick = () => {
      i.value++;
      addTodos({
        id: String(i.value),
        title: `待办${i.value}`,
        completed: false
      });
    };
    const onReset = () => {
      store.dispatch('todo/initTodos');
    };
    return {
      counter,
      todos,
      onClick,
      onReset
    };
  }
});
</script>
