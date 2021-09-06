// Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
// VendingMachine Spec

describe('Check Original Source Code', function() {
    
    describe('VendingMachine', () => {
        var coin;
        beforeEach(() => {
            vending = new VendingMachine();
         })
   
        // Check Property .allMyProducts exists
        it('should have an .allMyProducts property', () => {
            expect(vending.hasOwnProperty('allMyProducts')).toBeTruthy();
        })
        
        // Check Property .allMyProducts is an Array
        it('should have an array for the .allMyProducts', () => {
            expect(Array.isArray(vending.allMyProducts)).toBeTruthy();
        })
        
        // Check Property .allMyCoins exists
        it('should have an .allMyCoins property', () => {
            expect(vending.hasOwnProperty('allMyCoins')).toBeTruthy();
        })
        
        // Check Property .allMyCoins is an Array
        it('should have an array for the .allMyCoins', () => {
            expect(Array.isArray(vending.allMyCoins)).toBeTruthy();
        })
        
        // Check addProduct function exists
        it('should have an .addProduct function', () => {
            expect(typeof vending.addProduct).toBe('function');
        })
        
        // Check addCoin10Cent function exists
        it('should have an .addCoin function', () => {
            expect(typeof vending.addCoin).toBe('function');
        })   
    })    

    describe('Product', () => {
        var product;
        beforeEach(() => {
            product = new Product();
        })

        // Check Property .name exists
        it('should have a .name property', () => {
            expect(product.hasOwnProperty('name')).toBeTruthy();
        })

        // Check Property .colour exists
        it('should have a .colour property', () => {
            expect(product.hasOwnProperty('colour')).toBeTruthy();
        })
        
        // Check Property .weight exists
        it('should have a .name property', () => {
            expect(product.hasOwnProperty('weight')).toBeTruthy();
        })

        // Check Property .price exists
        it('should have a .name property', () => {
            expect(product.hasOwnProperty('price')).toBeTruthy();
        })

        // Check toProductTableRow function exists
        it('should have an .toProductTableRow function', () => {
            expect(typeof product.toProductTableRow).toBe('function');
        })
    })

    describe('Coin', () => {
        var coin;
        beforeEach(() => {
            coin = new Coin();
        })

        // Check Property .alloy exists
        it('should have a .alloy property', () => {
            expect(coin.hasOwnProperty('alloy')).toBeTruthy();
        })

        // Check Property .diameter exists
        it('should have a .diameter property', () => {
            expect(coin.hasOwnProperty('diameter')).toBeTruthy();
        })
        
        // Check Property .weight exists
        it('should have a .name property', () => {
            expect(coin.hasOwnProperty('weight')).toBeTruthy();
        })

        // Check Property .value exists
        it('should have a .name property', () => {
            expect(coin.hasOwnProperty('value')).toBeTruthy();
        })

        // Check toCoinTableRow function exists
        it('should have an .toCoinTableRow function', () => {
            expect(typeof coin.toCoinTableRow).toBe('function');
        })
    })
})

describe('Controller Tests', function() {
    describe('Adding Coins', () =>{
        var vendor;
        beforeEach(() => {
            vendor = Controller.setup();
        })
        
        // Check that 2 coins have been added
        it('should have added 2 Coins', () =>{
            expect(vendor.allMyCoins.length).toBe(2);
        })

        // Details of each coin are correct
        it('should have correctly set the details for each Coin', () =>{
            var aCoin; 
            aCoin = vendor.allMyCoins[0];
            expect(aCoin).toBeDefined();
            expect(aCoin.alloy).toBe('Cupro-nikel');
            expect(aCoin.diameter).toBe(23.62);
            expect(aCoin.weight).toBe(5.66);
            expect(aCoin.value).toBe(10);

            aCoin = vendor.allMyCoins[1];
            expect(aCoin).toBeDefined();
            expect(aCoin.alloy).toBe('nikel-back');
            expect(aCoin.diameter).toBe(23.62);
            expect(aCoin.weight).toBe(5.66);
            expect(aCoin.value).toBe(10);
        })
    })

    describe('Adding Product', () =>{
        var vendor;
        beforeEach(() => {
            vendor = Controller.setup();
        })
        
        // Check that 2 products have been added
        it('should have added 2 Products', () =>{
            expect(vendor.allMyProducts.length).toBe(2);
        })
        
        // Details of each product are correct
        it('should have correctly set the details for each Product', () =>{
            var aProduct;
            aProduct = vendor.allMyProducts[0];
            expect(aProduct).toBeDefined();
            expect(aProduct.name).toBe('Cola');
            expect(aProduct.colour).toBe('Red');
            expect(aProduct.weight).toBe(1.6);
            expect(aProduct.price).toBe(1.20);

            aProduct = vendor.allMyProducts[1];
            expect(aProduct).toBeDefined();
            expect(aProduct.name).toBe('V');
            expect(aProduct.colour).toBe('Blue');
            expect(aProduct.weight).toBe(1.6);
            expect(aProduct.price).toBe(1.20);
        }) 
    })
})
