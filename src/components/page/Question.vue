<template>
    <div>
        <navigation></navigation>

        <show-rest-badge-list></show-rest-badge-list>

        <!-- 問題を表すカード -->
        <b-card bg-variant="light" text-variant="black" class="text-center mx-5 my-3">
            <b-card-text class="py-2">ここに問題</b-card-text>
        </b-card>

        <b-button block variant="outline-success" @click="ShowAnswer()">回答を見る</b-button>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import ShowRestBadgeList from "@/components/ShowRestBadgeList"

export default {
    components:{
        Navigation,
        ShowRestBadgeList
    },
    methods:{
        ShowAnswer(){
            this.$emit("switch-is-show-question");
        }
    }
}
</script>

<style>
    
</style>