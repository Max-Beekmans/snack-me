<template>
  <div class="row gx-5">
    <div v-for="item in items" :key="item.name" class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
      <CandyBox :item-name="item.name" :item-price="item.price" :item-weight="item.weight" :item-image="item.image" />
    </div>
  </div>
</template>

<script>
import CandyBox from '@/components/CandyBox';

export default {
  name: 'BaseCardList',
  components: { CandyBox },
  props: {
    items: Array
  }
};
</script>

<style scoped>

</style>