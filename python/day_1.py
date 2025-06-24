# string function

a = " The workcohol is GOOD  "

print("Uppercase :",a.upper())        
print("Lowercase :",a.lower())       
print(a.title())        # each word capitalized
print(a.capitalize())   # First letter capitalized, rest lowercase
print("swap char :",a.swapcase())     

# space remove

print(a.strip())        # Remove leading and trailing spaces
print(a.lstrip())       # Remove left spaces
print(a.rstrip())       # Remove right spaces

#find

print(a.find("work"))   
print(a.index("work")) 
print(a.count("o"))  

# replace
print(a.replace("GOOD", "BEST")) 
#split
words = a.split()                 # Split by spaces 
print(words)
#join
joined = " ".join(words)          # Join 
print(joined)

print(a.startswith("  The"))     
print(a.endswith("GOOD  "))      
print("work" in a)               
print(a.isalpha()) 

#slice
print(a[0:4])      # First 3 characters
print(a[::-1])     # Reversed string
print(a[4:14])     # range
print(a[-2]) 


name ="santhosh"
age=22
print("My name is " + name + " and I am " + str(age) + " years old. " )
print(f"my name is {name} and i am {age} years old")
print("My name is {0}".format("Santhosh"))





