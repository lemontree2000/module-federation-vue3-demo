import { render, h } from 'vue';
const button = {
  name: 'btn-component',
  mounted() {
    console.log('component mounted in shared' )
  },
  render() {
    return h(
      'button',
      {
        id: 'btn-primary',
      },
      'Hello World',
    );
  },
};
export default button;
