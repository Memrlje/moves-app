<template>
    <div class="search-container">
        <input
            v-model="searchPhrase"
            ref="searchInput"
            class="search-input"
            @keyup="searchPhraseChanged"
        />
    </div>
</template>

<script>
    import MovieService from '../../services/MovieService';
    import ShowService from '../../services/ShowService';
    import {mapState, mapActions} from 'vuex'

export default {
    props: {
        
    },
    data() {
        return {
            searchPhrase: ''
        }
    },
    computed: {
        ...mapState(['activeTabIndex', 'movies'])
    },
    methods: {
        ...mapActions(['filterMovies', 'filterShows']),

        async searchPhraseChanged() {
            if(this.searchPhrase.length > 2) {
                if(this.activeTabIndex === 0) {
                    let movies = await MovieService.get_movies(this.searchPhrase);
                    this.filterMovies(movies)
                }else if(this.activeTabIndex === 1) {
                    let shows = await ShowService.get_shows(this.searchPhrase);
                    this.filterShows(shows)
                }
            }else {
               if(this.activeTabIndex === 0) {
                    let movies = await MovieService.get_movies();
                    this.filterMovies(movies)
                }else if(this.activeTabIndex === 1) {
                    let shows = await ShowService.get_shows();
                    this.filterShows(shows)
                } 
            }
        }
    },
    watch: {
        activeTabIndex() {
            this.searchPhrase = ''
        }
    }
}
</script>

<style scoped>
    .search-container {
        padding: 1em;
    }
    .search-input {
        border-radius: 16px;
        width: 40%;
        max-width: 400px;
        height: 2em;
        background: rgb(224, 251, 252);
        padding: 0 1em;
    }
    @media screen and (max-width: 800px) {
        .search-input {
            width: 80%
        }
    }
</style>