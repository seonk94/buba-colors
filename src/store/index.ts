import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface State {
  color: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    color: ''
  },
  mutations: {
    fetchSelectColor(state, color) {
      state.color = color;
    }
  },
  actions: {
    clickColor(context, color) {
      context.commit('fetchSelectColor', color)
    }
  }
})
