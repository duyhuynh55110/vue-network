<template>
    <div id="content-page" class="content-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 row m-0 p-0">
                    <div class="col-sm-12">
                        <CreatePost />

                        <PostCard />
                    </div>
                </div>
                <div class="col-lg-4">
                     <StoriesArea />
                     
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Events</h4>
                           </div>
                           <div class="iq-card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" role="button">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style="">
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-eye-fill mr-2"></i>View</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="media-story m-0 p-0">
                              <li class="d-flex mb-4 align-items-center ">
                                 <img :src="require('@public/images/s4.jpg')" alt="story-img" class="rounded-circle img-fluid">
                                 <div class="stories-data ml-3">
                                    <h5>Web Workshop</h5>
                                    <p class="mb-0">1 hour ago</p>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <img :src="require('@public/images/s5.jpg')" alt="story-img" class="rounded-circle img-fluid">
                                 <div class="stories-data ml-3">
                                    <h5>Fun Events and Festivals</h5>
                                    <p class="mb-0">1 hour ago</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Upcoming Birthday</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="media-story m-0 p-0">
                              <li class="d-flex mb-4 align-items-center">
                                 <img :src="require('@public/images/01.jpg')" alt="story-img" class="rounded-circle img-fluid">
                                 <div class="stories-data ml-3">
                                    <h5>Anna Sthesia</h5>
                                    <p class="mb-0">Today</p>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center">
                                 <img :src="require('@public/images/02.jpg')" alt="story-img" class="rounded-circle img-fluid">
                                 <div class="stories-data ml-3">
                                    <h5>Paul Molive</h5>
                                    <p class="mb-0">Tomorrow</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title">Suggested Pages</h4>
                           </div>
                           <div class="iq-card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <span class="dropdown-toggle" id="dropdownMenuButton01" data-toggle="dropdown" aria-expanded="false" role="button">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01" style="">
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-eye-fill mr-2"></i>View</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="suggested-page-story m-0 p-0 list-inline">
                              <li class="mb-3">
                                 <div class="d-flex align-items-center mb-3">
                                    <img :src="require('@public/images/42.png')" alt="story-img" class="rounded-circle img-fluid avatar-50">
                                    <div class="stories-data ml-3">
                                       <h5>Iqonic Studio</h5>
                                       <p class="mb-0">Lorem Ipsum</p>
                                    </div>
                                 </div>
                                 <img :src="require('@public/images/img-1.jpg')" class="img-fluid rounded" alt="Responsive image">
                                 <div class="mt-3"><a href="https://iqonic.design/themes/socialv/html/index.html#" class="btn d-block"><i class="ri-thumb-up-line mr-2"></i> Like Page</a></div>
                              </li>
                              <li class="">
                                 <div class="d-flex align-items-center mb-3">
                                    <img :src="require('@public/images/42.png')" alt="story-img" class="rounded-circle img-fluid avatar-50">
                                    <div class="stories-data ml-3">
                                       <h5>Cakes &amp; Bakes </h5>
                                       <p class="mb-0">Lorem Ipsum</p>
                                    </div>
                                 </div>
                                 <img :src="require('@public/images/img-2.jpg')" class="img-fluid rounded" alt="Responsive image">
                                 <div class="mt-3"><a href="https://iqonic.design/themes/socialv/html/index.html#" class="btn d-block"><i class="ri-thumb-up-line mr-2"></i> Like Page</a></div>
                              </li>
                           </ul>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
   import { CreatePost, PostCard } from "@components"
   import { StoriesArea } from "@containers/Auth/Home/components"

   export default {
      name: "HomeMain",
      components: {
         CreatePost,
         PostCard,
         StoriesArea,
      },
   }
</script>
