<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.key"
      class="h-72 2xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/3 md:mb-4 sm:mb-2"
      style="display: inline-block;"
    >
      <catalog-item
        :name="item.name"
        :img="
          'https://tech-catalog-images.s3.us-west-1.amazonaws.com/' +
            item.key +
            '.png'
        "
        :id_url="'https://tech-catalog.vercel.app/theme2/items/' + item.key"
      ></catalog-item>
    </li>
  </ul>
</template>

<script>
import catalogItem from "./../../components/theme2/catalogItem.vue";
export default {
  components: { catalogItem },
  mounted() {
    checkCookie("session_token", document);
    const res = await fetch(
      "https://tech-catalog-backend.herokuapp.com/get_items"
    );
    let items = await res.json();

    let categories = ["all"];

    items.forEach(iter)

    function iter(value) {
      value = value['categories'].split(', ');
      value.forEach(checkCategories);
    }
    function checkCategories(value) {
      if (!categories.includes(value)) {
        categories.push(value);
      }
    }
    return {
      items: items,
      categories: categories,
    };
  },
  methods: {
    isInclude(name, array) {
      return array.includes(name);
    }
  }
};
</script>
