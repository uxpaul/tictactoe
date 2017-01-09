((app) => {

    app.component('panier', {
        templateUrl: 'js/components/panier/panier.html',
        controller: function($http) {

            this.panier = []
            this.prix = 0

            this.add = () => {
                let line = {
                    quantity: this.value
                }

                let fruit = JSON.parse(this.fruit)

                let memory
              this.prix += fruit.price * (this.value)
              
                this.panier.forEach((element) => {
                    if (element.fruit.name === fruit.name) {
                        memory = element
                    }
                })

                if (memory) {
                    memory.quantity += this.value
                    memory.prix = memory.fruit.price * memory.quantity
                    // this.prix += memory.prix


                } else {
                    line.fruit = fruit
                    line.prix = fruit.price * (this.value)
                    this.panier.push(line)
                    // this.prix += line.prix

                }


            }


        }
    })

})(angular.module('app.panier'))
