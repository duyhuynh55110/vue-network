<template>
    <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
                <h4 class="card-title">Stories</h4>
            </div>
        </div>
        <div class="iq-card-body">
            <Stories :stories="stories" />
            <a href="https://iqonic.design/themes/socialv/html/index.html#" class="btn btn-primary d-block mt-3">See All</a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { StoryType } from "@types";
    import { IMAGES } from "@assets";
    import Stories from "@containers/Auth/Home/components/Stories/index.vue";

    export default defineComponent({
        name: "StoriesArea",
        components: {
            Stories
        },
        setup() {
            const stories = ref<StoryType[]>([
                {id: "qweqx3123123123c12", name: "Anna Mull", image: IMAGES.s2, created_at: "3 hours ago" },
                {id: "qweqx312qweqdq3123123c12", name: "Ira Membrit", image: IMAGES.s1, created_at: "4 hours ago" },
                {id: "qweqx3123123asdasd123c12", name: "Bob Frapples", image: IMAGES.s3, created_at: "9 hours ago" },
            ]);

            return {
                stories,
            }
        }
    })
</script>