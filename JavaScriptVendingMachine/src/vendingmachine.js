// Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
// VendingMachine

class VendingMachine { // eslint-disable-line no-unused-vars
    constructor () {
        this.allMyProducts = []
        this.allMyCoins = []
    }
    
    addProduct (newName, newColour, newWeight, newPrice) { 
        /* add a new product and push to allMyProducts */
        var newProduct = new Product(newName, newColour, newWeight, newPrice)
        this.allMyProducts.push(newProduct)
    }
    
    addCoin (newAlloy, newDiameter, newWeight, newValue){
        var newCoin = new Coin(newAlloy, newDiameter, newWeight, newValue)
        this.allMyCoins.push(newCoin)
        return newCoin
    }
}