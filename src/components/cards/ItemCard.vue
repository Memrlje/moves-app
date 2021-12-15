<template>
    <div class="card">
        <div class="columns">
            <div class="column col-6 col-md-8 col-mx-auto">
                
            <!-- <img slot="image" :src="imageSrc"> -->
            <span slot="title"> {{title}}</span>
            <p style="text-align: right;">Diretcted by: {{director}}</p>
            <p slot="body">{{description}}</p>
            <p style="text-align: left;">Actors: {{allActors}}</p>
            <StarRating v-model="ratingToShow"
            :star-size="20"
            @rating-selected="ratingSelected"
            ></StarRating>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating
    },
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        ratings: {
            type: Array,
        },
        director: {
            type: String
        },
        actors: {
            type: Array
        }

    },
    data() {
        return {
            userRated: false,
        }
    },
    computed: {
        imageSrc() {
            return 'https://source.unsplash.com/g1Kr4Ozfoac/' + '480x320';
        },
        ratingToShow() {
            if(this.userRated) {
                return this.ratings[this.ratings.length - 1];
            }else {
                return this.averageRating;
            }
        },
        averageRating() {
            let totalRatingsSum = this.ratings.reduce((a, b) => a + b, 0)
            return totalRatingsSum / this.ratings.length;
        },
        allActors() {
            return this.actors.toString()
        }
    },
    methods: {
        ratingSelected(val) {
            this.userRated = true;
            this.ratings.push(val)
        }
    }
}
</script>

<style scoped>
    .card {
        border-radius: 16px;
        width: 60%;
        background: rgb(92, 107, 115);
        margin: 4em;
        padding: 4em;
        margin: 5em auto;
        color: rgb(224, 251, 252);
    }
</style>