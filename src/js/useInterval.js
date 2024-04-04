import { onMounted, onUnmounted } from 'vue';

export function useInterval(callback, time = 1000) {
  
  let timer = null;
  
  function start() {
    stop();
    timer = setInterval(callback, time);
  }
  
  function stop() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  onMounted(start);
  onUnmounted(stop);

  return { start, stop };
}
