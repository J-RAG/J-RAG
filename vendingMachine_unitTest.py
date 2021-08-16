# Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
# vendingMachine_unitTest 2021

import unittest
from coin import Coin
from product import Product
from vendingmachine import VendingMachine


class TestEmptyVendingMachine(unittest.TestCase):
    def setUp(self):
        self.vendor = VendingMachine()

    def test_a_empty_all_my_products(self):
        self.assertTrue(hasattr(self.vendor, 'all_my_products'))
        self.assertEqual(type(self.vendor.all_my_products), list)
        self.assertEqual(len(self.vendor.all_my_products), 0)

    def test_b_empty__all_my_coins(self):
        self.assertTrue(hasattr(self.vendor, 'all_my_coins'))
        self.assertEqual(type(self.vendor.all_my_coins), list)
        self.assertEqual(len(self.vendor.all_my_coins), 0)

    def test_c_add_coin10cent_exists(self):
        self.assertTrue(hasattr(self.vendor, 'add_coin10cent'))
        self.assertTrue(callable(getattr(self.vendor, 'add_coin10cent', None)))

    def test_d_add_product01_exits(self):
        self.assertTrue(hasattr(self.vendor, 'add_product01'))
        self.assertTrue(callable(getattr(self.vendor, 'add_product01', None)))


class TestCoin(unittest.TestCase):
    def setUp(self):
        self.coin = Coin('Cupro-nikel', 23.62, 5.66, 10)

    def test_a_coin_alloy(self):
        self.assertTrue(hasattr(self.coin, 'alloy'))
        self.assertEqual(self.coin.alloy, 'Cupro-nikel')

    def test_b_coin_diameter(self):
        self.assertTrue(hasattr(self.coin, 'diameter'))
        self.assertEqual(self.coin.diameter, 23.62)

    def test_c_coin_weight(self):
        self.assertTrue(hasattr(self.coin, 'weight'))
        self.assertEqual(self.coin.weight, 5.66)

    def test_d_coin_value(self):
        self.assertTrue(hasattr(self.coin, 'value'))
        self.assertEqual(self.coin.value, 10)


class TestProduct(unittest.TestCase):
    def setUp(self):
        self.product = Product('Cola', 'Red', 1.6, 1.20)

    def test_a_product_name(self):
        self.assertTrue(hasattr(self.product, 'name'))
        self.assertEqual(self.product.name, 'Cola')

    def test_b_product_colour(self):
        self.assertTrue(hasattr(self.product, 'colour'))
        self.assertEqual(self.product.colour, 'Red')

    def test_c_product_weight(self):
        self.assertTrue(hasattr(self.product, 'weight'))
        self.assertEqual(self.product.weight, 1.6)

    def test_d_product_price(self):
        self.assertTrue(hasattr(self.product, 'price'))
        self.assertEqual(self.product.price, 1.20)


# class TestControllerAddActivitiesToCoins(unittest.TestCase):
#     def test_a_coins_have_correct_details(self):
#         vendor = controller.setup()
#
#         coin01 =
#         self.assertEqual(coin.alloy, )
#
#         coin02 = vendor.find_coin('nikel-back')
#         self.assertEqual(len(coin02.all_my_coins), 1)
#
# class TestControllerAddActivitiesToProducts(unittest.TestCase):
#     def test_a_product_have_correct_name(self):
#
#


if __name__ == '__main__':
    unittest.main(verbosity=3)
