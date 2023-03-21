var myObj = {
    attributeOne: "value 1",
    attributeTwo: "value 2",
    attributeThree: "value 3",
    attributeFour: "value 4",
    displayAll: function(){
        console.log(this.attributeOne)
        console.log(this.attributeTwo)
        console.log(this.attributeThree)
        console.log(this.attributeFour)
    }
}

var anotherObj = {
    attributeOne: "value 9",
    attributeTwo: "value 10",
    attributeThree: "value11",
    attributeFour: "value 12",
    displayAll: function(){
        console.log(this.attributeOne)
        console.log(this.attributeTwo)
        console.log(this.attributeThree)
        console.log(this.attributeFour)
    }
}

myObj.displayAll()
anotherObj.displayAll()