# Julan Ray Avila Gutierrez, jra0108@arastudent.ac.nz
# controller

from vendingmachine import VendingMachine


def setup():
    vendor = VendingMachine()

    # Alloy         Diameter   Weight   Value
    # Cupro-nikel   23.62      5.66     10
    # nikel-back    23.62      5.66     10

    vendor.add_coin10cent('Cupro-nikel', 23.62, 5.66, 10)
    vendor.add_coin10cent('nikel-back', 23.62, 5.66, 10)

    # Name   Colour   Weight   Price
    # Cola   Red      1.6      1.20
    # V      blue     1.6      1.20

    vendor.add_product01('Cola', 'Red', 1.6, 1.20)
    vendor.add_product01('V', 'blue', 1.6, 1.20)

    return vendor


if __name__ == '__main__':
    the_electorate = setup()
#    print(the_electorate.all_my_coins)
#    print(the_electorate.all_my_products)
#    print(the_electorate.find_product('V'))
#    print(the_electorate.find_coin('Cupro-nikel'))
