def likes(names):
    message = "no one likes this"

    if len(names) > 3:
        message = f'{", ".join(names[:2])} and {len(names) - 2} others like this'
    elif 2 == len(names):
        message = f'{" and ".join(names)} like this'
    elif 3 == len(names):
        message = f'{", ".join(names[:2])} and {"".join(names[2])} like this'
    elif 1 == len(names):
        message = f'{"".join(names)} likes this'
    return message
