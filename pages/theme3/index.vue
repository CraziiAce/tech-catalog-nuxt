<template>
  <ul class="bg-gray-900">
    <li
      v-for="item in items"
      :key="item.key"
      class="lg:w-1/4 md:w-1/3 sm:w-1/2"
      style="display: inline-block;"
    >
      <catalog-item
        :name="item.name"
        :img="
          'https://tech-catalog-backend.herokuapp.com/get_item_image?item_key=' +
            item.key
        "
        :id_url="'https://tech-catalog.vercel.app/theme3/items/' + item.key"
      ></catalog-item>
    </li>
  </ul>
</template>

<script>
import catalogItem from "./../../components/theme3/catalogItem.vue";
export default {
  components: { catalogItem },
  mounted() {
    checkCookie("session_token", document);
  },
  async asyncData() {
    const items = await fetch(
      "https://tech-catalog-backend.herokuapp.com/get_items"
    ).then(res => res.json());
    return {
      items: items
    };
  }
};
</script>
