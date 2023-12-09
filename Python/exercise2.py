def exercise2(day, month, year):
    """
    Exercise 2 - Magical Dates:
    Finds magic dates where the date multiplied by the month is equal to the last two digits of the year.

    Parameters:
    - day (int): Day of the month. Must be a positive non-zero integer in the range of 1 to 31.
    - month: Numerical month of the year. Must be a positive non-zero integer in the range of 1 to 12.
    - year: Year number. Must be a positive integer.

    Returns:
    - boolean: True if the date is a magic date, else False.
    """

    return day * month == year % 100  # Last two digits of the year are identified by modulo 100.
