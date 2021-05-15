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

          <div v-if="$route.name == 'ProfileImagesContainer'" class="header-for-bg">
              <div class="background-header position-relative">
                <img src="https://iqonic.design/themes/socialv/html/images/page-img/profile-bg5.jpg" class="img-fluid rounded w-100 rounded rounded" alt="profile-bg">
                <div class="title-on-header">
                    <div class="data-block">
                      <h2>Your Photos</h2>
                    </div>
                </div>
              </div>
          </div>

          <!-- Page Content  -->
          <div id="content-page" class="content-page">
            <router-view></router-view>
          </div>
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
    },
  });
</script>
