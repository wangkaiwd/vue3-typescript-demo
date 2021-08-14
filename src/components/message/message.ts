import { MessageOptions } from './types';
import { createVNode, render } from 'vue';
import MessageComponent from './message.vue';

const Message = (options: MessageOptions) => {
  if (typeof options === 'string') { // type guard
    options = {
      message: options
    };
  }
  const vm = createVNode(MessageComponent, options as any);
  const container = document.createElement('div');
  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
};

export default Message;