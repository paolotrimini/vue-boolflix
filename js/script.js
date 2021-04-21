    function initVue() {

         new Vue({

                el: '#app',
                data: {
                    search: 'donnie darko',
                    movies: [],
                    series: [],
                    imgSize: 'w342'

                },

               methods: {

                   searchMovie: function() {

                       const params = {
                           params: {
                               'api_key': '7ff024206457c3360e440b86eb061a79',
                               'query': this.search,
                               'language': 'it'
                           }
                       };

                       axios.get('https://api.themoviedb.org/3/search/movie',params)
                           .then(data => {
                               this.movies = data.data.results;
                               console.log(this.movies);
                               });

                       axios.get('https://api.themoviedb.org/3/search/tv',params)
                           .then(data => {
                               this.series = data.data.results;
                               console.log(this.series);
                           });

                   }, // fine searchMovie()

                   isFlaggable: function(lang){
                       if(lang == 'en' || lang == 'it')
                           return true;
                       return false;
                   },

                   getFlag: function(lang){
                       switch(lang) {
                           case 'en': return 'en.png';
                           case 'it': return 'it.png';
                       }
                       return lang;
                   }

               } // fine methods

        }) // fine newVue


        }

    function init() {
        initVue();
    }
    document.addEventListener('DOMContentLoaded', init);