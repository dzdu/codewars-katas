# Beginner Series #1 School Paperwork
def paperwork(n, m):
    if n == -abs(n) or m == -abs(m):
        return 0
    else:
        return n*m
