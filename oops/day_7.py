from abc import ABC, abstractmethod

#Abstraction
class Animal(ABC):
    def __init__(self, name, age):
        self.name = name
        self._age = age  

    @abstractmethod
    def category(self):
        pass

    def get_age(self):
        return self._age

#Inheritance +Polymorphism
class WildAnimal(Animal):
    def category(self):
        print(f"{self.name} is a wild animal.")

class PetAnimal(Animal):
    def category(self):
        print(f"{self.name} is a pet animal.")


class Lion(WildAnimal):
    def sound(self):
        print("Roar!")

class Dog(PetAnimal):
    def sound(self):
        print("Bark!")

class Parrot(PetAnimal):
    def sound(self):
        print("Chirp!")

#Object Creation
lion = Lion("Simba", 5)
dog = Dog("Bruno", 3)
parrot = Parrot("Mittu", 2)

animals = [lion, dog, parrot]

for animal in animals:
    animal.category()     
    animal.sound()        
    print(f"{animal.name} is {animal.get_age()} years old\n")
