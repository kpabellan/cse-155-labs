list = [5, 3, 8, 6, 1, 9, 2, 4, 7]

def insertion_sort():
  for i in range(1, len(list)):
    key = list[i]
    j = i - 1
    while j >= 0 and key < list[j]:
      list[j + 1] = list[j]
      j -= 1
    list[j + 1] = key

insertion_sort()
print(list)