<template>
  <table v-if="list" class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th v-for="col in columns" v-bind:key="col" scope="col">{{ col }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value, index) in list" v-bind:key="value.name">
      <th scope="row">{{index}}</th>
      <td v-for="col in columns" v-bind:key="col">{{ value[col] }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    list: Array,
    columns: Array
  }
};
</script>

<style scoped>

</style>