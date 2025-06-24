# moduel & package 
# 1) moduel
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import day_4 as d
maxi = d.find_max(23,34,56,7)
print (maxi)
print (d.facto(5))
from day_4 import palindrome as p
print(p("malayalam"))

# package
import pandas as pd
#import seaborn as sns
import matplotlib.pyplot as plt
df = pd.read_csv("D:\workcokol_assessment\python\day_5\Iris.csv")
print(df.head())

# Visualize feature 
plt.figure(figsize=(6, 4))
plt.scatter(df['SepalLengthCm'], df['SepalWidthCm'], color='blue')
plt.title("Sepal Length vs Sepal Width")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Sepal Width (cm)")
plt.grid(True)
plt.show()
