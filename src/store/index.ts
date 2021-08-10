import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import todo, { TodoState } from './modules/todo';

export interface State {
  counter: number;
  todo?: TodoState; // add one optional property
}

export const key: InjectionKey<Store<State>> = Symbol();
const store = createStore<State>({
  state: {
    counter: 0
  },
  modules: {
    todo
  }
});

export function useStore () {
  return baseUseStore(key);
}

export default store;