<template>
    <div>
        <h1>hello {{message}}</h1>
        <h2>
            say:{{yeah}}
        </h2>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                message:"cheng",
                yeah:"welcome"
            }
        }
    }
</script>

<style lang="css" scoped>
    h1{
        color: red;
    }
</style>