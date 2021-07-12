<template>
    <div class="container">
        <h2>{{ $t("message.price_list") }}</h2>
        <BaseTable v-bind:list="items" v-bind:columns="columns"></BaseTable>
    </div>
</template>

<script>
    import BaseTable from '@/components/base/BaseTable';

    export default {
      name: 'Prices',
      components: { BaseTable },
      data() {
        return {
          columns: ["name", "weight", "price", "image"]
        }
      },
      computed: {
        items() {
          return this.$store.getters.allItems;
        }
      },
      created() {
        this.$store.dispatch('getItems');
      }
    };
</script>

<style scoped>
  .container {
    margin-top: 7em;
  }
</style>