var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {

        userRemove: function (index) {
            this.usersService.remove(index).then(response => (this.users = response.data));
        },
        
        userAdd: function (name, city) {
            console.log(name, city);
            this.usersService.add({name, city}).then(response => (this.users = response.data));
        },

        userEdit: function (index, name, city) {
            this.usersService.modify(index, {name, cit }).then(response => (this.users = response.data));
        }
    }
})