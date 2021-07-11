<template>
  <table v-if="list" class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th v-for="(value, name) in list[0]" v-bind:key="value.name" scope="col">{{ name }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value, index) in list" v-bind:key="value.name">
      <th scope="row">{{index}}</th>
      <td v-for="prop in value" v-bind:key="prop">{{ prop }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    list: Array
  }
};
</script>

<style scoped>

</style>