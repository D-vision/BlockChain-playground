var Vue = require('vue');
window.$ = window.jQuery = require("jquery");

var app = new Vue({
    el: "#app",
    data: {
        head: 'Dogovor24 blockchain demo',
        blocks: null
    },
    methods: {
      test: function(){
          console.log(this.blocks);
      }
    },
    beforeCreate: function(){
        this.blocks = 'asd';
        $.ajax({url: "/blocks",
            success: (result) => {
                this.blocks = JSON.parse(result);
                console.log(this.blocks);
            }});
    }
});