import { Module } from 'vuex';
import { State } from '../index';

export interface Todo {
  id: string
  title: string
  completed: boolean
}

const initialState = {
  todos: [{ id: '1', title: '待办1', completed: false }] as Todo[]
};

// `actions` and `mutations` `playload` parameter type always `any`?
export type TodoState = typeof initialState
const todos: Module<TodoState, State> = {
  namespaced: true,
  state: () => initialState,
  mutations: {
    initTodos (state, payload: Todo[]) {
      state.todos = payload;
    },
    addTodos (state, payload: Todo) {
      state.todos.push(payload);
    }
  },
  actions: {
    initTodos ({ commit }) {
      setTimeout(() => {
        // not have type tip ?
        commit('initTodos', initialState.todos);
      }, 2000);
    }
  }
};

export default todos;