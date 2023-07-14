def count_bits(n):
    bn = bin(n)[2:]
    return bn.count("1")
