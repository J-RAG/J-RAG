// Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
// Coin

class Coin {
    constructor (newAlloy, newDiameter, newWeight, newValue) {
        this.alloy = newAlloy
        this.diameter = newDiameter
        this.weight = newWeight
        this.value = newValue     
    }
    
    // toCoinTableRow method
    toCoinTableRow () {
        let result = '<tr>'
        result += `<td>${this.alloy}</td>`  
        result += `<td>${this.diameter}</td>`  
        result += `<td>${this.weight}</td>`  
        result += `<td>${this.value}</td>`   
        result += '</tr>'
        return result  
    }
}