from collections import defaultdict
import json

Tree = lambda: defaultdict(Tree)

def data(array_length=20, field_count=20, nest_depth=4, nest_width=4):
    d = []

    for i in range(0, array_length):
        row = { 'only' + str(i): i }
        for j in range(0, field_count):
            field_key = 'key' + str(j)
            row[field_key] = Tree()
            for k in range(0, nest_width):
                v = j
                l = nest_depth
                while (l > 0):
                    v = { 'nest' + str(l): v }
                    l -= 1
                tree_key = 'tree' + str(k)
                row[field_key][tree_key] = v
    
        d.append(row)
    return d

with open('vgt.json', 'w') as f:
    json.dump(data(), f, indent=2)
