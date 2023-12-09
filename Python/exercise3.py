def exercise3(l):
    """
    Exercise 3 - All Sublists:
    Returns all the possible sublists within an input Array list.

    Parameters:
    - l (Array): The input list which sublists are extracted from.

    Returns:
    - Array: An array list containing all possible sublists.
    """
    sublists = [[]]
    for i in range(len(l)):  # Outer for loop iterates through the Array
        for j in range(i, len(l)):  # Inner for loop iterates from the current index to the end
            sublists.append(l[i: j + 1])  # Slices the list and adds them to the sublists array
    return sublists
