# numbers
a= 12
b=23.4
c=-4j

print (type(a))
print (type(b))
print (type(c))

# arithmatic operation
b=3

print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)

# random fun   choice
import random as r
a=10
b=5
opp=["+","-","*","/"]
op=r.choice(opp)

if op == "+":
    result = a + b
elif op == "-":
    result =a-b
elif op == "*":
    result = a*b
else:
    result = a/b
print(f"Random operation: {a} {op} {b} = {result}")

#using randint
import random as r
a= r.randint(1,20)
b= r.randint(1,20)
opp=["+","-","*","/"]
op=r.choice(opp)

if op == "+":
    result = a + b
elif op == "-":
    result =a-b
elif op == "*":
    result = a*b
else:
    result = a/b
print(f"Random operation: {a} {op} {b} = {result}")


a=r.random()
print(a)

# math fun

import math as m
a=9
b=2
print("square root :",m.sqrt(a))
print("power : ", m.pow(a,b))
print("Exponential :" ,m.exp(b))
print("log :", m.log(b))
print("ceil :",m.ceil(3.1))
print("floor :",m.floor(3.1))
print("truncate :",m.trunc(2.33))
print("factorial :",m.factorial(4))
print ("greatest common divisor :",m.gcd(10,5))
print ("least common factor :", m.lcm(7,8,4))

# trignomentric fun
print("sine :",m.sin(m.pi/2))
print("cosine :",m.cos(0))
print("tangent :",m.tan(m.pi/2))

print("radians to degree :",m.degrees(m.pi))
print("degree to radians :",m.radians(180))


