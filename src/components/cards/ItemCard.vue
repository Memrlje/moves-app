<template>
    <div class="card">
        <div class="columns">
            <div class="column col-6 col-md-8 col-mx-auto">
                
            <!-- <img slot="image" :src="imageSrc"> -->
            <span slot="title"> {{title}}</span>
            <p v-if="director" style="text-align: right;">Diretcted by: {{director}}</p>
            <p slot="body">{{description}}</p>
            <p style="text-align: left;">Actors: {{allActors}}</p>
            <div class="ratings">
                <StarRating v-model="ratingToShow"
                :star-size="20"
                @rating-selected="ratingSelected"
                ></StarRating>
                <i class="material-icons">star</i>
                <p>{{averageRating}}</p>
            </div>
            
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
        averageRating() {
            let totalRatingsSum = this.ratings.reduce((a, b) => a + b, 0)
            let total = totalRatingsSum / this.ratings.length;
            var roundedNum = Math.round(total * 10) / 10
            return roundedNum;
             
        },
        allActors() {
            return this.actors.toString()
        },
        ratingToShow() {

        return !this.userRated ? this.averageRating : this.ratings.at(-1)
    },
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
    .ratings {
        margin: 2em 0 0 0;
    }
</style>