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
        :id_url="'https://catalog.theloganschool.org/theme2/items/' + item.key"
      ></catalog-item>
    </li>
  </ul>
</template>

<script>
import catalogItem from "./../../components/theme2/catalogItem.vue";
export default {
  components: { catalogItem },
  mounted() {
    console.log("mounted");
    checkCookie("session_token", document);
    let items = [];
    let categories = ["all"];

    (async () => {
      let res = await fetch(
        "https://tech-catalog-backend.herokuapp.com/get_items",
        {
          mode: "no-cors"
        }
      );
      items = await res.json();
    })();
    console.log(items);
    items.forEach(item => {
      item.categories = item.categories.split(", ");

      item.categories.forEach(category => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });

    console.log(categories);
    return {
      items: items,
      categories: categories
    };
  },
  methods: {
    isInclude(name, array) {
      return array.includes(name);
    }
  }
};
</script>
