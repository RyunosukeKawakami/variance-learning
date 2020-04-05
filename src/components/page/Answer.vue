<template>
    <div>
        <navigation/>

        <show-rest-badge-list/>
        <answer-card/>

        <!-- 回答ボタン -->
        <b-button block variant="success" @click="SendAnswerResult('easy')">即答！</b-button>
        <b-button block variant="primary" @click="SendAnswerResult('normal')">ちょっと悩んだ</b-button>
        <b-button block variant="warning" @click="SendAnswerResult('difficalt')">だいぶ悩んだ</b-button>
        <b-button block variant="danger"  @click="SendAnswerResult('hard')">難しかった</b-button>

        <b-button block variant="outline-danger" class="mt-4" @click="SendAnswerResult('noidea')">分からなかった</b-button>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import AnswerCard from "@/components/AnswerCard.vue"
import ShowRestBadgeList from "@/components/ShowRestBadgeList.vue"

export default {
    components:{
        Navigation,
        AnswerCard,
        ShowRestBadgeList
    },
    methods:{
        SendAnswerResult(difficalty){
            //受け取った引数データベースに登録する。
            console.log(difficalty);
            this.$emit('switch-is-show-question')
        }
    }
}
</script>

<style>

</style>