<template>
    <div>
        <question v-if='isShowQuestion' @switch-is-show-question='SwitchIsShowQuestion(false)'/>
        <answer v-else @switch-is-show-question='SwitchIsShowQuestion(true)'/>
    </div>
</template>

<script>
import Question from '@/components/page/Question.vue'
import Answer from '@/components/page/Answer.vue'

export default {
    data(){
        return{
            isShowQuestion: true
        }
    },
    components:{
        Question,
        Answer
    },
    methods:{
        SwitchIsShowQuestion(isShowQuestion){
            this.isShowQuestion = isShowQuestion;
        }
    }
}
</script>

<style>

</style>