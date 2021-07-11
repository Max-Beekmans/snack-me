<template>
    <div class="container">
        <h2>{{ $t("message.price_list") }}</h2>
        <BaseTable v-bind:list="items"></BaseTable>
    </div>
</template>

<script>
    import BaseTable from '@/components/base/BaseTable';

    export default {
      name: 'Prices',
      components: { BaseTable },
      data: function () {
          return {
            items: [
              {
                name: "ItemName",
                weight: "200g",
                price: "2"
              },
              {
                name: "Yinek",
                weight: "Kanker veel",
                price: "2"
              },
              {
                name: "Gek moment",
                weight: "Eva YDe",
                price: "2"
              }
            ]
          }
        }
    };
</script>

<style scoped>
  .container {
    margin-top: 7em;
  }
</style>