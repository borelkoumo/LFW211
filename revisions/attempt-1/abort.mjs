import { once } from 'events';
import Unreliable from './unreliable.mjs';

async function answer() {
  const unreliable = new Unreliable();
  const ac = new AbortController();
  const signal = ac.signal;

  const timeout = setTimeout(() => {
    console.log('Aborted');
    ac.abort();
  }, 500);
  try {
    await once(unreliable, 'ping', { signal });
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Abbort error')
    } else {
      throw error;
    }
  } finally {
    console.log('FInaly')
    clearTimeout(timeout);
  }
}
await answer();
console.log('Completed!');
