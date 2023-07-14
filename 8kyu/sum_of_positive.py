# Sum of positive
def positive_sum(arr):
    arr2 = []
    for x in arr:
        if x < 0:
            continue
        arr2.append(x)
    return sum(arr2)
