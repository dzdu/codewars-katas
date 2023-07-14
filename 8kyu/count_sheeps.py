# Counting sheep...
def count_sheeps(sheep):
    tSheep = []
    for x in sheep:
        if x == True:
            tSheep.append(x)
    return sum(tSheep)
