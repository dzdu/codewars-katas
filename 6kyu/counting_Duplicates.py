def duplicate_count(text):
    c = {}
    for x in text.lower():
        c[x] = c.get(x, 0) + 1
    return len([a for a in c.values() if a > 1]) if len([a for a in c.values() if a > 1]) > 0 else 0


print(duplicate_count("abcdea"))
print(duplicate_count(""))
print(duplicate_count("Indivisibilities"))
print(duplicate_count("abcdeaab"))
