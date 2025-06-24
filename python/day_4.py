# function 
# 1.factorial 
from tokenize import String

def facto(n):
    result=1
    for i in range (1,n+1):
        result *=i
    return result


# 2. max num

def find_max(a,b,c,f):
    return max(a,b,c,f)


# 3.prime num
def prime(n):
    if n<= 1:
        return "not a prime num"
    for i in range (2,int(n** .5)+1):
        if n%i ==0:
            return "not a prime num"
    return "It's a prime num"


# 4.reverse a String
def reverse(s):
    return s[::-1]


# 5.palindrome
def palindrome(word):
    return word.lower() == word[::-1].lower()




# Exception handling

def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Cannot divide by zero!"


# value error
def inputs():
    try:
        num=int(input("enter a num :"))
        return f" you entered :{num}"
    except ValueError:
        return "enter a proper num"
    


# else and finally

def check_positive(num):
    try:
        if num < 0:
            raise ValueError("negative number")
    except ValueError as e:
        print("Error:", e)
    else:
        print("Number is positive.")
    finally:
        print("end.")



if __name__== "__main__":
    check_positive(-5)
    print(inputs())
    print(divide(10, 0)) 
    print(palindrome("Madam")) 
    print("reverse a string :",reverse("sandy"))
    print(prime(7))
    print("max num :",find_max(23,45,67,33))
    print("factorial :",facto(6))