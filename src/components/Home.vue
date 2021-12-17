<template>
    <div class="home">
    <Header>
       <template v-slot:movies-tab>
           <Card
           v-for="(movie, index) in movies"
           :key="index"
           :title="movie.title"
           :description="movie.description"
           :ratings="movie.ratings"
           :actors="movie.stars"
           :director="movie.director"
           ></Card>
       </template>
       <template v-slot:shows-tab>
           <Card
           v-for="(show, index) in shows"
           :key="index"
           :title="show.title"
           :description="show.description"
           :ratings="show.ratings"
           :actors="show.stars"
           :director="show.director"
           ></Card>
       </template>
    </Header>
    </div>
</template>

<script>
    import Header from './header/Header.vue';
    import Card from './cards/ItemCard.vue';
    import MovieService from '../services/MovieService.js';
    import ShowService from '../services/ShowService.js';
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            Header,
            Card,
        },
        data() {
            return {    
            }
        },
        methods: {
            ...mapActions(['filterMovies', 'filterShows'])
        },
        computed: {
            ...mapState(['movies', 'shows'])
        },
        async created() {
            let movies = await MovieService.get_movies();
            this.filterMovies(movies)
            let shows = await ShowService.get_shows();
            this.filterShows(shows)
        }
    }
</script>

<style scoped>

</style>