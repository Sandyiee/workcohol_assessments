# class & object
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

my_car = Car("Toyota", "Corolla")
print(my_car.brand)  

# encapsulation

class bank_account:
    def __init__(self):
        self.__balance = 0  

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

account = bank_account()
account.deposit(1000)
print(account.get_balance())  

# Inherited

class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.speak() 
d.bark()

# Polymorphism
class Animal:
    def sound(self):
        print("Some generic animal sound")

class Dog(Animal):
    def sound(self):
        print("Bark")

class Cat(Animal):
    def sound(self):
        print("Meow")

animals = [Dog(), Cat()]

for i in animals:
    i.sound()

# abstractmethod

from abc import ABC, abstractmethod
class Vehicle(ABC):
    
    @abstractmethod
    def start(self):
        pass

class Car(Vehicle):
    def start(self):
        print("Car engine started")

class Bike(Vehicle):
    def start(self):
        print("Bike engine started")

car = Car()
bike = Bike()

car.start()  
bike.start()  


