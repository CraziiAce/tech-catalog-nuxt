<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.key"
      class="h-72 lg:w-1/4 md:w-1/3 sm:w-1/3 md:mb-4 sm:mb-2"
      style="display: inline-block;"
    >
      <catalog-item
        :name="item.name"
        :img="
          'https://tech-catalog-images.s3.us-west-1.amazonaws.com/' +
            item.key +
            '.png'
        "
        :id_url="'https://tech-catalog.vercel.app/theme1/items/' + item.key"
      ></catalog-item>
    </li>
  </ul>
</template>

<script>
import catalogItem from "./../../components/theme1/catalogItem.vue";
export default {
  components: { catalogItem },
  mounted() {
    checkCookie("session_token", document);
    pageLoad(document);
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
