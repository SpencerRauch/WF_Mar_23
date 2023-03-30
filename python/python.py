print("Hello world")

# this is a comment
# this is my second line

"""
this is a multiline comment
technically just a string literal that we don't store
"""

# var x = 7;

x = 7
y = 7.8
is_cool = True
boolean = False

# strings

string = "This is a collection of characters"

# print(string + x) this won't work!

#type conversion functions
# int() str() float()

print(string + str(x))
# print(x + string)

# ` ${} ` string interpolation
# f strings! format string
message = f"{string} and the number was {x}"
print(message)

#lists 
fruits = ['apple', 'orange', 'pear']
fruits.append('banana')

print(fruits[3])
fruits.pop(2)
fruits.sort()
print(fruits)
print(fruits.index('orange'))


#dictionaries key value pairs

dict = {
    "keyone": 9
}

print(dict['keyone'])

x = 12
if x > 50:
    print('bigger than 50')
elif x > 100:
    print('biggger than 100')
else:
    print("pretty small")

# comparison operators:
"""
 == is equal
 != is not equal
 >
 <
 >=
 <=
 and
 or
 not
"""


# for ____ in ___:

#first blank: iterative variable
#second blank: collection we're interating over

for one_fruit in fruits:
    print(one_fruit)
    one_fruit = "bob"

print(fruits)

#range function
# three parameters
# start-- the number to start on INCLUSIVE and optional! Defaults to 0
# stop -- the number to stop before (exclusive) -- required
# step -- the number to increment by

# for i in range(10,1000,100):
#     print(i)

for i in range(len(fruits)):
    print(fruits[i])
    fruits[i] = 'bob'

print(fruits)

#len function len(list) returns the length of the list

dict2 = {
    "make": 'Ford',
    "model": 'Escape',
    "color": 'White'
}
# iterating over a dictionary will give us the keys!

for key in dict2:
    print(f"{key} {dict2[key]}")


def coolfunc(b, a=6):
    print(f"adding {a} and {b}")
    return a + b

result = coolfunc(9,10)

print(result)

def coolfunc(a,b):
    print(f"adding {a} and {b}")
    return a + b

result = coolfunc(b=9,a=10)

print(result)


