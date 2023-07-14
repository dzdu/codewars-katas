def descending_order(numbers):
    li = list(str(numbers))
    res = sorted(map(int, li))
    return int("".join([str(x) for x in res[::-1]]))
