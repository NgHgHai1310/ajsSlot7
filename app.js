angular.module("app", []);

angular.module("app").controller("MainController", function(){
    var vm = this;
    vm.title = "Learn Angular by example";
    vm.searchInput ="";
    vm.shows = [
        {
            title:"doi mat co lua",
            author:"nguyen hung son",
            favorite: true
        },
        {
            title:"life of Pi",
            author:"Davan",
            favorite:false
        },
        {
            title:"Learn Angular by example",
            author:"FPT-Aptech"
            favorite:true
        },
        {
            title:"ho nha trai",
            author:"nguyen anh tu",
            favorite:false
        },
        {
            title:"hoc code totay",
            author:"Fpt",
            favorite:true
        }
    ];
    vm.orders = [
        {
            id:1,
            title:"Author Ascending",
            key:"author",
            reverse:false
        },
        {
            id:2,
            title:"Author Descending",
            key:"author",
            reverse:true
        },
        {
            id:3,
            title:"Title Ascending",
            key:"title",
            reverse:false
        },
        {
            id:4,
            title:"Title Ascending",
            key:"title",
            reverse:true
        }
    ];
    vm.order = vm.orders[0];
    vm.new ={};
    vm.assShow = function(){
        vm.show.push(vm.new);
        vm.new={};
    };
});