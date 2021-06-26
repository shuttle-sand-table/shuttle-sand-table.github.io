<template>
  <div class="">
    <!-- <SandTable /> -->
    <p>
      This website has been moved to <a class="text-blue-800 underline" :href="new_url">{{ new_url }}</a
      >.
    </p>
    <p>Redirect in 5s ...</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import SandTable from '@/components/SandTable.vue'

export default {
  name: "Home",
  data() {
    return {
      new_url: "https://tacticalboard.github.io/",
    };
  },
  mounted: function () {
    console.log(this.new_url)
    setTimeout(() => {
      window.location.href = this.new_url;
    }, 5000);
  },
  components: {
    // SandTable
  },
};
</script>
