# Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
# vendingmachine

from product import Product
from coin import Coin


class VendingMachine:
    def __init__(self):
        self.all_my_coins = []
        self.all_my_products = []

    def add_coin10cent(self, newalloy, newdiameter, newweight, newvalue):
        """
            Creates a 10 cent coin appends it to
            self.allmycoins list.
        """
        new_coin = Coin(newalloy, newdiameter, newweight, newvalue)
        self.all_my_coins.append(new_coin)

    def add_product01(self, newname, newcolour, newweight, newprice):
        """
            Creates Product "1" and appends it to
            self.all_my_products list.

        """
        new_product = Product(newname, newcolour, newweight, newprice)
        self.all_my_products.append(new_product)
