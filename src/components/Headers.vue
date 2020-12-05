<template>
    <h1>{{thetitle}}</h1>
</template>

<script>

export default {
    name: "Header",
    props:['thetitle']
}
</script>

<style scoped>
    .header{
        background: #333;
        color:white;
        text-align: center;
        padding: 10px;
        margin: 0px;
    }
</style>