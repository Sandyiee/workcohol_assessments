# if condition
age =19
if age >= 18:
    print("you are eligible.")

# else 
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
                # or
result="yor can eligible to vote." if age >=18 else "you can't"
print (result)

# elif 
mark=89
if mark >= 90:
    print("Grade: A")
elif mark >= 75:
    print("Grade: B")
elif mark >= 60:
    print("Grade: C")
else:
    print("Grade: F")

# multiple condition 
x=4
y=3
if x> 5 and y<12:
    print ("condition is true")
else:
    print ("false")

# looping 

for i in range(5):
    print("num :",i)

for i in range(1,5):
    print("num :",i)

for i in range(1,10,2):
    print ("odd num :",i)

for i in range (1,11):
    if i%2==0:
        print ("even num :",i)

# while 
z=0
while z <=5:
    print ("count :",z)
    z+=1

# odd num 
z=1
while z <=10:
    print ("odd :",z)
    z+=2

# even num 
z=1
while z <=10:
    if z %2 ==0:
        print ("even :",z)
    z+=1
