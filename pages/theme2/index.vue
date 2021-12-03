<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.key"
      class="lg:w-1/4 md:w-1/3 sm:w-1/2"
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
    /* const event = await fetch(
      "https://tech-catalog-backend.herokuapp.com/record_event", {
        method: "POST",
        body: JSON.stringify({
          "theme": "theme2",
          "time": Date.now(),
          "event": "page_view",
          "session_token": document.cookie("session_token"),
        })
      }
    ).then(res => res.json()); */
  },
  async asyncData() {
    const items = await fetch(
      "https://tech-catalog-backend.herokuapp.com/get_items"
    ).then(res => res.json());

    const event = await fetch(
      "https://tech-catalog-backend.herokuapp.com/record_event",
      {
        method: "POST",
        body: JSON.stringify({
          theme: "theme2",
          time: Date.now(),
          event: "page_view",
          session_token: document.cookie("session_token")
        })
      }
    ).then(res => res.json());
    return {
      items: items
    };
  }
};
</script>
