Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        services: [
            {
                name: 'Juggling',
                price: 350,
                active:true
            },{
                name: 'Design',
                price: 200,
                active:false
            },{
                name: 'Criticism',
                price: 0,
                active:false
            },{
                name: 'Tutoring',
                price: 225,
                active:false
            },{
                name: 'Babysitting',
                price: 1000,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){
            var total = 0;
            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});
