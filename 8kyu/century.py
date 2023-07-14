# Century From Year
from math import ceil


def century(year):
    # Finish this :)
    return ceil(year / 100)


# solution 2


def century(year):
    strng = str(year)
    if len(strng) >= 4:
        return int(strng[:2]) + 1 if int(strng[-2]) or int(strng[-1]) > 0 else int(strng[:2])
    elif len(strng) == 3:
        return int(strng[:1]) + 1 if int(strng[-2] or int(strng[-1])) >= 0 else int(strng[:1])
    else:
        return 1
