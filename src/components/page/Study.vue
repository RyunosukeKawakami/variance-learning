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
            <b-button block variant="success" to="/answer" @click="SendAnswerResult('easy')">即答！</b-button>
            <b-button block variant="primary" to="/answer" @click="SendAnswerResult('normal')">ちょっと悩んだ</b-button>
            <b-button block variant="warning" to="/answer" @click="SendAnswerResult('difficalt')">だいぶ悩んだ</b-button>
            <b-button block variant="danger"  to="/answer" @click="SendAnswerResult('hard')">難しかった</b-button>

            <b-button block variant="outline-danger" class="mt-4" to="/answer" @click="SendAnswerResult('noidea')">分からなかった</b-button>
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
    },
    methods:{
        SendAnswerResult(difficalty){
            //受け取った引数データベースに登録する。
            console.log(difficalty);
        }
    }
}
</script>

<style>
    
</style>