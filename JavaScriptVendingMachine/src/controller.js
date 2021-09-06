// Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
// Controller

class Controller { // eeslint-disable-line no-unused-vars
    static setup () {
        var vendor = new VendingMachine()
        /*
            Alloy         Diameter   Weight   Value
            Cupro-nikel   23.62      5.66     10
            nikel-back    23.62      5.66     10
        */
        
        vendor.addCoin('Cupro-nikel', 23.62, 5.66, 10)
        vendor.addCoin('nikel-back', 23.62, 5.66, 10)        
        
        /*
            Name   Colour   Weight   Price
            Cola   Red      1.6      1.20
            V      blue     1.6      1.20
        */
        vendor.addProduct('Cola', 'Red', 1.6, 1.20)
        vendor.addProduct('V', 'Blue', 1.6, 1.20)
     
    return vendor
    }
}