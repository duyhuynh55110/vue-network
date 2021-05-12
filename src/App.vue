<template>
  <div>
      <!-- loader Start -->
      <Loading />

      <!-- Wrapper Start -->
      <div class="wrapper">
          <!-- Sidebar  -->
          <SideBar />

          <!-- Top NavBar -->
          <TopNavBar />

          <!-- Right Sidebar -->
          <RightSideBar />

          <!-- Page Content  -->
          <router-view />>
      </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {SideBar, TopNavBar, RightSideBar, Loading} from "@components"

  export default defineComponent({
    name: 'App',
    components: {
      SideBar,
      TopNavBar,
      RightSideBar,
      Loading
    }
  });
</script>
