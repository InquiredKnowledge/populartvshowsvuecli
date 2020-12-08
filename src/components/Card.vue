<template>   
    <div>
        <!-- For each card bound int cardlist from the App.vue, create a card -->
        <h1>{{thetitle}}</h1>
        <div class="card-deck">
            <div v-for="card in cardlist" v-bind:key="card.id" class="card">
                <img v-bind:src="card.poster_path" class="card-img-top">
                <div class="card-body">
                    <h1 class="card-title">{{ card.name }}</h1>
                    <p class="text">{{ card.overview }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    Name: 'Card',
    props: ['thetitle', 'cardlist']
}
</script>

<style>

</style>