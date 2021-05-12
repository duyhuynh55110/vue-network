<template>
    <ul class="media-story m-0 p-0">
        <li class="d-flex mb-4 align-items-center">
            <i class="ri-add-line font-size-18"></i>
            <div class="stories-data ml-3">
            <h5>Creat Your Story</h5>
            <p class="mb-0">time to story</p>
            </div>
        </li>

        <li 
            v-for="(story, key) in stories"
            :story="story"
            :key="key"
            class="d-flex mb-4 align-items-center active">
                <img :src="require('@public/images/s3.jpg')" alt="story-img" class="rounded-circle img-fluid">
                <div class="stories-data ml-3">
                    <h5> {{ story.name }} </h5>
                    <p class="mb-0"> {{ story.created_at }} </p>
                </div>
        </li> 
    </ul>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import { StoryType } from "@types";

    export default defineComponent({
        name: "Stories",
        components: {
        },
        props: {
            stories: {
                type: Array as PropType<StoryType[]>,
                required: true,
            }
        },
        created() {
            this.stories.map(e => console.log(e.name));
        },
    })
</script>