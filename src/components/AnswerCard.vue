<template>
    <!-- 問題・回答を表すカード -->
    <b-card bg-variant="light" text-variant="black" class="text-center mx-5 my-3" header-tag="nav">

        <template v-slot:header>
            <b-nav card-header tabs>
            <b-nav-item :active="isQuestionActive" v-on:click="ActiveQuestion">問題</b-nav-item>
            <b-nav-item :active="isAnswerActive" v-on:click="ActiveAnswer">答え</b-nav-item>
            </b-nav>
        </template>

        <b-card-text class="py-2">
            {{body_text}}
        </b-card-text>

    </b-card>
</template>

<script>

export default {
    data: function(){
        return{
            isQuestionActive: false,
            isAnswerActive: true,
            body_text: "問題の答え"
        }
    },
    methods:{
        ActiveAnswer: function(){
            this.isQuestionActive = false;
            this.isAnswerActive = true;
            this.UpdateBodyText();
        },
        ActiveQuestion: function(){
            this.isQuestionActive = true;
            this.isAnswerActive = false;
            this.UpdateBodyText();
        },
        UpdateBodyText: function(){
            if(this.isQuestionActive){
                this.body_text = "問題文"
            }
            else{
                this.body_text = "問題の答え"
            }
        }
    }
}
</script>

<style>

</style>