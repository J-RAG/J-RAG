// Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
// Product 

class Product {
    constructor (newName, newColour, newWeight, newPrice) {
        this.name = newName
        this.colour = newColour
        this.weight = newWeight
        this.price = newPrice
    }
    
    // toProductTableRow function
    toProductTableRow() {
        let result = '<tr>'
        result += `<td>${this.name}</td>`  
        result += `<td>${this.colour}</td>`  
        result += `<td>${this.weight}</td>`  
        result += `<td>${this.price}</td>`   
        result += '</tr>'
        return result
    }  
}