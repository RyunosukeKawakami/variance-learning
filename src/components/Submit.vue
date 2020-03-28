<template>
    <div>
        <navigation/>
        
        <div>
            <!-- 問題文 -->
            <b-form-group
                class="my-5 mx-5"
                label="問題文"
                label-for="textarea-question"
            >
            <b-form-textarea
                id="textarea-question"
                v-model="text1"
                placeholder="問題文を入力"
                rows="3"
                max-rows="8"
                no-resize="true"
            ></b-form-textarea>
            </b-form-group>

            <!-- 回答文 -->
            <b-form-group
                class="mx-5"
                label="回答文"
                label-for="textarea-anser"
            >
            <b-form-textarea
                id="textarea-anser"
                v-model="text2"
                placeholder="回答文を入力"
                rows="3"
                max-rows="8"
                no-resize="true"
            ></b-form-textarea>
            </b-form-group>
        </div>

        <b-button variant="primary" class="mt-2 mx-5 px-5">登録</b-button>

    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
    name:'submit',
    components:{
        Navigation
    }
}
</script>

<style>

</style>