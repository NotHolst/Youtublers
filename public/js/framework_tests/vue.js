var app = new Vue({
    el: '#app',
    data: {
      items: []
    },
    methods: {
        testAdd10000Items() {
            for (let index = 0; index < 10000; index++) {
                this.items.push({
                    id: index,
                    name: 'test'
                });
            }
        }
    }
  })