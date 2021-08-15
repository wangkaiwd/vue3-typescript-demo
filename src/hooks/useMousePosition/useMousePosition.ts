import { onMounted, onUnmounted, reactive, toRefs } from 'vue';

// primitive data type need value property to keep reactive
// complex data type not need value property
const useMousePosition = () => {
  const position = reactive({
    x: 0,
    y: 0
  });
  const onClick = (e: MouseEvent) => {
    position.x = e.pageX;
    position.y = e.pageY;
  };
  onMounted(() => {
    window.addEventListener('click', onClick);
  });
  onUnmounted(() => {
    window.removeEventListener('click', onClick);
  });
  return position;
};

export default useMousePosition;