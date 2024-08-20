<template>
  <div class="title">{{ title }}</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const title = ref("Remote Component in Action..");

onMounted(() => {
  console.log('Created in shard component')
})

// export default {
//   data() {
//     return {
//       title: 'Remote Component in Action..',
//     };
//   },
//   created() {
//     console.log('Created in shard component')
//   }
// };

</script>

<style lang="less" scoped>
@white: #fff;

.text {
  transform: rotate(-30deg);
}

.title {
  background-color: red;
  color: @white !important;
//  .text()
}
</style>