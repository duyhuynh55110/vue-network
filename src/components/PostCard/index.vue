<template>
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div class="iq-card-body">
            <div class="user-post-data">
                <div class="d-flex flex-wrap">
                <div class="media-support-user-img mr-3">
                    <img class="rounded-circle img-fluid" :src="require('@public/images/01.jpg')" alt="">
                </div>
                <div class="media-support-info mt-2">
                    <h5 class="mb-0 d-inline-block"><a href="https://iqonic.design/themes/socialv/html/index.html#" class="">Anna Sthesia</a></h5>
                    <p class="mb-0 d-inline-block">Add New Post</p>
                    <p class="mb-0 text-primary">Just Now</p>
                </div>
                <div class="iq-card-post-toolbar">
                    <div class="dropdown">
                        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                        <i class="ri-more-fill"></i>
                        </span>
                        <div class="dropdown-menu m-0 p-0">
                            <a class="dropdown-item p-3" href="https://iqonic.design/themes/socialv/html/index.html#">
                            <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-save-line"></i></div>
                                <div class="data ml-2">
                                    <h6>Save Post</h6>
                                    <p class="mb-0">Add this to your saved items</p>
                                </div>
                            </div>
                            </a>
                            <a class="dropdown-item p-3" href="https://iqonic.design/themes/socialv/html/index.html#">
                            <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>
                                <div class="data ml-2">
                                    <h6>Hide Post</h6>
                                    <p class="mb-0">See fewer posts like this.</p>
                                </div>
                            </div>
                            </a>
                            <a class="dropdown-item p-3" href="https://iqonic.design/themes/socialv/html/index.html#">
                            <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>
                                <div class="data ml-2">
                                    <h6>Unfollow User</h6>
                                    <p class="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                            </div>
                            </a>
                            <a class="dropdown-item p-3" href="https://iqonic.design/themes/socialv/html/index.html#">
                            <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-notification-line"></i></div>
                                <div class="data ml-2">
                                    <h6>Notifications</h6>
                                    <p class="mb-0">Turn on notifications for this post</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
            </div>
            <div class="user-post">
                <div class="d-flex">
                <div class="col-md-6">
                    <a href="javascript:void();"><img :src="require('@public/images/p2.jpg')" alt="post-image" class="img-fluid rounded w-100"></a>
                </div>
                <div class="col-md-6 row m-0 p-0">
                    <div class="col-sm-12">
                        <a href="javascript:void();"><img :src="require('@public/images/p1.jpg')" alt="post-image" class="img-fluid rounded w-100"></a>
                    </div>
                    <div class="col-sm-12 mt-3">
                        <a href="javascript:void();"><img :src="require('@public/images/p3.jpg')" alt="post-image" class="img-fluid rounded w-100"></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="comment-area mt-3">
                <div class="d-flex justify-content-between align-items-center">
                <div class="like-block position-relative d-flex align-items-center">
                    <div class="d-flex align-items-center">
                        <div class="like-data">
                            <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <img :src="require('@public/images/01.png')" class="img-fluid" alt="">
                            </span>
                            <div class="dropdown-menu">
                                <a class="ml-2 mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like"><img :src="require('@public/images/01.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love"><img :src="require('@public/images/02.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img :src="require('@public/images/03.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img :src="require('@public/images/04.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img :src="require('@public/images/05.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img :src="require('@public/images/06.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="https://iqonic.design/themes/socialv/html/index.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img :src="require('@public/images/07(1).png')" class="img-fluid" alt=""></a>
                            </div>
                            </div>
                        </div>
                        <div class="total-like-block ml-2 mr-3">
                            <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            140 Likes
                            </span>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Max Emum</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Bill Yerds</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Hap E. Birthday</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Tara Misu</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Midge Itz</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Sal Vidge</a>
                                <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Other</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="total-comment-block">
                        <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            20 Comment
                            </span>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Max Emum</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Bill Yerds</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Hap E. Birthday</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Tara Misu</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Midge Itz</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Sal Vidge</a>
                            <a class="dropdown-item" href="https://iqonic.design/themes/socialv/html/index.html#">Other</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="share-block d-flex align-items-center feather-icon mr-3">
                    <a href="javascript:void();"><i class="ri-share-line"></i>
                    <span class="ml-1">99 Share</span></a>
                </div>
                </div>
                <hr>
                <ul class="post-comments p-0 m-0">
                <li class="mb-2">
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img :src="require('@public/images/02.jpg')" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                            <a href="javascript:void();">like</a>
                            <a href="javascript:void();">reply</a>
                            <a href="javascript:void();">translate</a>
                            <span> 5 min </span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="d-flex flex-wrap">
                        <div class="user-img">
                            <img :src="require('@public/images/03.jpg')" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                        </div>
                        <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                            <a href="javascript:void();">like</a>
                            <a href="javascript:void();">reply</a>
                            <a href="javascript:void();">translate</a>
                            <span> 5 min </span>
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
                <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                <input type="text" class="form-control rounded">
                <div class="comment-attagement d-flex">
                    <a href="javascript:void();"><i class="ri-link mr-3"></i></a>
                    <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>
                    <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "PostCard"
    }
</script>