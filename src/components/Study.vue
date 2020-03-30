<template>
    <div>
        <navigation></navigation>

        <show-rest-badge-list></show-rest-badge-list>

        <!-- 問題を表すカード -->
        <b-card bg-variant="light" text-variant="black" class="text-center mx-5 my-3">
            <b-card-text class="py-2">ここに問題</b-card-text>
        </b-card>

        <!-- 回答ボタン -->
        <div>
            <b-button block variant="success">即答！</b-button>
            <b-button block variant="primary">ちょっと悩んだ</b-button>
            <b-button block variant="warning">だいぶ悩んだ</b-button>
            <b-button block variant="danger">難しかった</b-button>

            <b-button block variant="outline-danger" class="mt-4">分からなかった</b-button>
        </div>

    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import ShowRestBadgeList from "@/components/ShowRestBadgeList"

export default {
    components:{
        Navigation,
        ShowRestBadgeList
    }
}
</script>

<style>

</style>