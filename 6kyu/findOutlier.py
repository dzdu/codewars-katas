def find_outlier(integers):
    odd = []
    even = []
    for i in range(len(integers)):
        if integers[i] % 2 == 0: even.append(integers[i])
        else: odd.append(integers[i])
    return odd[0] if len(odd)< len(even) else even[0]



print(find_outlier([0, 1, 2]));
print(find_outlier([1, 2, 3]));
print(find_outlier([2, 6, 8, 10, 3]));
print(find_outlier([1, 1, 0, 1, 1]));