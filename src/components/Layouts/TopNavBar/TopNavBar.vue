<template>
   <div class="iq-top-navbar">
      <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
         <div class="iq-navbar-logo d-flex justify-content-between">
            <a href="https://iqonic.design/themes/socialv/html/index.html">
            <img :src="require('@public/images/logo.png')" class="img-fluid" alt="">
            <span>SocialV</span>
            </a>
            <div class="iq-menu-bt align-self-center">
            <div class="wrapper-menu">
               <div class="main-circle"><i class="ri-menu-line"></i></div>
            </div>
         </div>
         </div>
         <div class="iq-search-bar">
            <form action="https://iqonic.design/themes/socialv/html/index.html#" class="searchbox">
               <input type="text" class="text search-input" placeholder="Type here to search...">
               <a class="search-link" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-search-line"></i></a>
            </form>
         </div>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
         <i class="ri-menu-3-line"></i>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-list">
               <li>
                  <a href="https://iqonic.design/themes/socialv/html/profile.html" class="iq-waves-effect d-flex align-items-center">
                     <img :src="require('@public/images/1.jpg')" class="img-fluid rounded-circle mr-3" alt="user">
                     <div class="caption">
                        <h6 class="mb-0 line-height">Bni Cyst</h6>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="https://iqonic.design/themes/socialv/html/index.html" class="iq-waves-effect d-flex align-items-center">
                  <i class="ri-home-line"></i>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="search-toggle iq-waves-effect" href="https://iqonic.design/themes/socialv/html/index.html#"><i class="ri-group-line"></i></a>
                  <div class="iq-sub-dropdown iq-sub-dropdown-large">
                     <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 ">
                           <div class="bg-primary p-3">
                              <h5 class="mb-0 text-white">Friend Request<small class="badge  badge-light float-right pt-1">4</small></h5>
                           </div>
                           <div class="iq-friend-request">
                              <div class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="">
                                       <img class="avatar-40 rounded" :src="require('@public/images/01.jpg')" alt="">
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Jaques Amole</h6>
                                       <p class="mb-0">40  friends</p>
                                    </div>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <a href="javascript:void();" class="mr-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" class="mr-3 btn btn-secondary rounded">Delete Request</a>
                                 </div>
                              </div>
                           </div>
                           <div class="iq-friend-request">
                              <div class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="">
                                       <img class="avatar-40 rounded" :src="require('@public/images/02.jpg')" alt="">
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Lucy Tania</h6>
                                       <p class="mb-0">12  friends</p>
                                    </div>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <a href="javascript:void();" class="mr-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" class="mr-3 btn btn-secondary rounded">Delete Request</a>
                                 </div>
                              </div>
                           </div>
                           <div class="iq-friend-request">
                              <div class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="">
                                       <img class="avatar-40 rounded" :src="require('@public/images/03.jpg')" alt="">
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Manny Petty</h6>
                                       <p class="mb-0">3  friends</p>
                                    </div>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <a href="javascript:void();" class="mr-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" class="mr-3 btn btn-secondary rounded">Delete Request</a>
                                 </div>
                              </div>
                           </div>
                           <div class="iq-friend-request">
                              <div class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                 <div class="d-flex align-items-center">
                                    <div class="">
                                       <img class="avatar-40 rounded" :src="require('@public/images/04.jpg')" alt="">
                                    </div>
                                    <div class="media-body ml-3">
                                       <h6 class="mb-0 ">Marsha Mello</h6>
                                       <p class="mb-0">15  friends</p>
                                    </div>
                                 </div>
                                 <div class="d-flex align-items-center">
                                    <a href="javascript:void();" class="mr-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" class="mr-3 btn btn-secondary rounded">Delete Request</a>
                                 </div>
                              </div>
                           </div>
                           <div class="text-center">
                              <a href="https://iqonic.design/themes/socialv/html/index.html#" class="mr-3 btn text-primary">View More Request</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="nav-item">
                  <a href="https://iqonic.design/themes/socialv/html/index.html#" class="search-toggle iq-waves-effect">
                     <div id="lottie-beil"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clippath id="__lottie_element_2"><rect width="192" height="192" x="0" y="0"></rect></clippath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(5.833330154418945,0,0,5.833330154418945,26.000038146972656,36.96422576904297)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,12,21.639999389648438)"></g><g opacity="1" transform="matrix(0.9976557493209839,-0.06843243539333344,0.06843243539333344,0.9976557493209839,12,8.654000282287598)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M6,-0.6539999842643738 C6,-5.052999973297119 1.2649999856948853,-8.345999717712402 -3.38700008392334,-5.715000152587891 C-5.052000045776367,-4.77400016784668 -6.0329999923706055,-2.9560000896453857 -6.002999782562256,-1.0440000295639038 C-5.888999938964844,6.271999835968018 -9,8.345999717712402 -9,8.345999717712402 C-9,8.345999717712402 9,8.345999717712402 9,8.345999717712402 C9,8.345999717712402 6,6.3460001945495605 6,-0.6539999842643738z"></path></g><g opacity="1" transform="matrix(0.9993908405303955,0.03489949554204941,-0.03489949554204941,0.9993908405303955,12.612510681152344,21.548931121826172)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M1.7300000190734863,-0.6399999856948853 C1.1749999523162842,0.3149999976158142 -0.04800000041723251,0.6399999856948853 -1.003999948501587,0.08699999749660492 C-1.3049999475479126,-0.08799999952316284 -1.555999994277954,-0.33799999952316284 -1.7300000190734863,-0.6399999856948853"></path></g></g></g></svg></div>
                     <span class="bg-danger dots"></span>
                  </a>
                  <div class="iq-sub-dropdown">
                     <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 ">
                           <div class="bg-primary p-3">
                              <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                           </div>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/01.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Emma Watson Bni</h6>
                                    <small class="float-right font-size-12">Just Now</small>
                                    <p class="mb-0">95 MB</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/02.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">New customer is join</h6>
                                    <small class="float-right font-size-12">5 days ago</small>
                                    <p class="mb-0">Cyst Bni</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/03.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Two customer is left</h6>
                                    <small class="float-right font-size-12">2 days ago</small>
                                    <p class="mb-0">Cyst Bni</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/04.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">New Mail from Fenny</h6>
                                    <small class="float-right font-size-12">3 days ago</small>
                                    <p class="mb-0">Cyst Bni</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a href="https://iqonic.design/themes/socialv/html/index.html#" class="search-toggle iq-waves-effect">
                     <div id="lottie-mail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clippath id="__lottie_element_7"><rect width="192" height="192" x="0" y="0"></rect></clippath></defs><g clip-path="url(#__lottie_element_7)"><g transform="matrix(7.713209629058838,-0.5216356515884399,0.5216356515884399,7.713209629058838,-2.818145751953125,-4.25653076171875)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,12,12.399999618530273)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M-7.199999809265137,-6.599999904632568 C-7.199999809265137,-6.599999904632568 7.199999809265137,-6.599999904632568 7.199999809265137,-6.599999904632568 C8.190999984741211,-6.599999904632568 9,-5.85699987411499 9,-4.949999809265137 C9,-4.949999809265137 9,4.949999809265137 9,4.949999809265137 C9,5.857999801635742 8.190999984741211,6.599999904632568 7.199999809265137,6.599999904632568 C7.199999809265137,6.599999904632568 -7.199999809265137,6.599999904632568 -7.199999809265137,6.599999904632568 C-8.1899995803833,6.599999904632568 -9,5.857999801635742 -9,4.949999809265137 C-9,4.949999809265137 -9,-4.949999809265137 -9,-4.949999809265137 C-9,-5.85699987411499 -8.1899995803833,-6.599999904632568 -7.199999809265137,-6.599999904632568z"></path></g><g opacity="1" transform="matrix(1,0,0,1,12,9.75)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M8,-3.1500000953674316 C8,-3.1500000953674316 0,3.1500000953674316 0,3.1500000953674316 C0,3.1500000953674316 -8,-3.1500000953674316 -8,-3.1500000953674316"></path></g></g><g style="display: none;" transform="matrix(6.833330154418945,0,0,6.833330154418945,14.000038146972656,14.00287914276123)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,12,15.399999618530273)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M-7.199999809265137,-6.599999904632568 C-7.199999809265137,-6.599999904632568 7.199999809265137,-6.599999904632568 7.199999809265137,-6.599999904632568 C8.190999984741211,-6.599999904632568 9,-5.85699987411499 9,-4.949999809265137 C9,-4.949999809265137 9,4.949999809265137 9,4.949999809265137 C9,5.857999801635742 8.190999984741211,6.599999904632568 7.199999809265137,6.599999904632568 C7.199999809265137,6.599999904632568 -7.199999809265137,6.599999904632568 -7.199999809265137,6.599999904632568 C-8.1899995803833,6.599999904632568 -9,5.857999801635742 -9,4.949999809265137 C-9,4.949999809265137 -9,-4.949999809265137 -9,-4.949999809265137 C-9,-5.85699987411499 -8.1899995803833,-6.599999904632568 -7.199999809265137,-6.599999904632568z"></path></g><g opacity="1" transform="matrix(1,0,0,1,12,7.5)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M7.01200008392334,2.9149999618530273 C7.01200008392334,2.9149999618530273 7.01200008392334,-4.085000038146973 7.01200008392334,-4.085000038146973 C7.01200008392334,-4.085000038146973 -6.98799991607666,-4.085000038146973 -6.98799991607666,-4.085000038146973 C-6.98799991607666,-4.085000038146973 -6.98799991607666,2.9149999618530273 -6.98799991607666,2.9149999618530273"></path><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M7.01200008392334,2.9149999618530273 C7.01200008392334,2.9149999618530273 7.01200008392334,-4.085000038146973 7.01200008392334,-4.085000038146973 C7.01200008392334,-4.085000038146973 -6.98799991607666,-4.085000038146973 -6.98799991607666,-4.085000038146973 C-6.98799991607666,-4.085000038146973 -6.98799991607666,2.9149999618530273 -6.98799991607666,2.9149999618530273"></path></g><g opacity="1" transform="matrix(1,0,0,1,12,12.75)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="2" d=" M8,-3.1500000953674316 C8,-3.1500000953674316 0,3.1500000953674316 0,3.1500000953674316 C0,3.1500000953674316 -8,-3.1500000953674316 -8,-3.1500000953674316"></path></g></g></g></svg></div>
                     <span class="bg-primary count-mail"></span>
                  </a>
                  <div class="iq-sub-dropdown">
                     <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 ">
                           <div class="bg-primary p-3">
                              <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
                           </div>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/01.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Bni Emma Watson</h6>
                                    <small class="float-left font-size-12">13 Jun</small>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/02.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                                    <small class="float-left font-size-12">20 Apr</small>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/03.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Why do we use it?</h6>
                                    <small class="float-left font-size-12">30 Jun</small>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/04.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Variations Passages</h6>
                                    <small class="float-left font-size-12">12 Sep</small>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/index.html#" class="iq-sub-card">
                              <div class="media align-items-center">
                                 <div class="">
                                    <img class="avatar-40 rounded" :src="require('@public/images/05.jpg')" alt="">
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Lorem Ipsum generators</h6>
                                    <small class="float-left font-size-12">5 Dec</small>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
            <ul class="navbar-list">
               <li class="">
                  <a href="https://iqonic.design/themes/socialv/html/index.html#" class="search-toggle iq-waves-effect d-flex align-items-center"><span class="ripple rippleEffect" style="width: 75px; height: 75px; top: 3.83904px; left: -20.3777px;"></span>
                  <i class="ri-arrow-down-s-fill"></i>
                  </a>
                  <div class="iq-sub-dropdown iq-user-dropdown">
                     <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 ">
                           <div class="bg-primary p-3 line-height">
                              <h5 class="mb-0 text-white line-height">Hello Bni Cyst</h5>
                              <span class="text-white font-size-12">Available</span>
                           </div>
                           <a href="https://iqonic.design/themes/socialv/html/profile.html" class="iq-sub-card iq-bg-primary-hover">
                              <div class="media align-items-center">
                                 <div class="rounded iq-card-icon iq-bg-primary">
                                    <i class="ri-file-user-line"></i>
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">My Profile</h6>
                                    <p class="mb-0 font-size-12">View personal profile details.</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/profile-edit.html" class="iq-sub-card iq-bg-warning-hover">
                              <div class="media align-items-center">
                                 <div class="rounded iq-card-icon iq-bg-warning">
                                    <i class="ri-profile-line"></i>
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Edit Profile</h6>
                                    <p class="mb-0 font-size-12">Modify your personal details.</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/account-setting.html" class="iq-sub-card iq-bg-info-hover">
                              <div class="media align-items-center">
                                 <div class="rounded iq-card-icon iq-bg-info">
                                    <i class="ri-account-box-line"></i>
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Account settings</h6>
                                    <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                 </div>
                              </div>
                           </a>
                           <a href="https://iqonic.design/themes/socialv/html/privacy-setting.html" class="iq-sub-card iq-bg-danger-hover">
                              <div class="media align-items-center">
                                 <div class="rounded iq-card-icon iq-bg-danger">
                                    <i class="ri-lock-line"></i>
                                 </div>
                                 <div class="media-body ml-3">
                                    <h6 class="mb-0 ">Privacy Settings</h6>
                                    <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                                 </div>
                              </div>
                           </a>
                           <div class="d-inline-block w-100 text-center p-3">
                              <a class="bg-primary iq-sign-btn" href="https://iqonic.design/themes/socialv/html/sign-in.html" role="button">Sign out<i class="ri-login-box-line ml-2"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
      </div>
   </div>
</template>