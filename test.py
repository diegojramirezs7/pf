a = [1, 2, 3, 4, 5]
b = [4, 5, 6, 7, 8]

diff = []
for item in a:
	if item not in b:
		diff.append(item)

for item in b:
	if item not in a:
		diff.append(item)

print(diff)