def high_and_low(numbers):
    res = sorted(list(map(int, numbers.split())))
    return f'{"".join([str(res[-1])])} {"".join([str(res[0])])}'
