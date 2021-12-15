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
           :actors="movie.actors"
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
           :actors="show.actors"
           :director="show.director"
           ></Card>
       </template>
    </Header>
    </div>
</template>

<script>
    import Header from './header/Header.vue';
    import Card from './cards/ItemCard.vue';

    export default {
        components: {
            Header,
            Card,
        },
        data() {
            return {
                movies: [
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Dva',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Tri',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Cetiri',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Pet',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Sest',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Sedam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Film Osam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                ],
                shows: [
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Dva',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Tri',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Cetiri',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Pet',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Sest',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Sedam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                    {
                    ratings: [2, 2, 4, 4, 3, 5, 1],
                    title: 'Show Osam',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    director: 'Director Jedan',
                    actors: ['Actor Jedan', 'Actor Dva', 'Actor Tri']
                    },
                ]
                
            }
        }
    }
</script>

<style scoped>

</style>