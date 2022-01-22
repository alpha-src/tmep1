---
layout: post
title: Pythonic Code
description: >
  Naver boostcamp AI Tech - Python Basics for AI
hide_description: false
category: aipython
image:
  path: ../../assets/img/thumbnail/pythonic.png
---

**해당 썸네일은 `Wonkook Lee` 님이 만드신 [`Thumbnail-Maker`](https://wonkooklee.github.io/thumbnail_maker/){:target="_blank"} 를 이용하였습니다**
{:.figcaption}

오늘은 꽤나 중요한 부분을 다루는 포스팅이다. 바로 `Pythonic Code` 이다. 인공지능을 위한 코드를 짜려면 이제 `Python` 을 주로 (거의 무조건) 쓸텐데
이때 파이썬 스타일대로 짜야 남들도 이해하기 쉽고 효율성 면에서도 이득을 볼 수 있다. 차근차근 봐보도록 하자

* this unordered seed list will be replaced by the toc
{:toc}

# Pythonic Code

## Why Pythonic Code?

### 남 코드에 대한 이해도

`많은 개발자들은 python 스타일로 코딩함`

### 효율

`단순 for loop append 보다 list 가 조금 더 빠름 익숙해지면 코드도 짧아짐`

### 간지 😎

`쓰면 왠지 코드 잘 짜는 거처럼 보임`

## Split & join

> string type 의 값을 `기준값` 으로 나눠서 List 형태로 변환

<pre><code class="python">"""
split
"""

items = "zero one two three".split()    #빈칸을 기준으로 문자열 나누기
print(items)
['zero', 'one', 'two', 'three']

ex = 'python,java,javascript'.split(",")
print(ex)
['python', 'java', 'javascript']

a, b, c = ex     # 언패킹
ex = 'teamlab.technology.io'
subdomain, domain, tld = ex.split(".")

"""
join
"""

colors = ['red', 'blue', 'green', 'yellow']
"-".join(colors)
# red-blue-green-yellow 

</code></pre>

## list comprehension

- 기존 list 사용하여 간단히 다른 list 를 만드는 기법
- 포괄적인 list, 포함되는 리스트라는 의미로 사용됨
- 파이썬에서 가장 많이 사용되는 기법 중 하나
- 일반적으로 for + append 보다 속도가 빠름

<pre><code class="python">result = [i for i in range(10)]
# 0 1 2 3 4 5 6 7 8 9

result = [i for i in range(10) if i%2==0]
#0 2 4 6 8

"""
nested for loop
"""

word_1 = "Hello"
word_2 = "World"

result = [i+j for i in word_1 for j in word_2]

"""
위 코드를 표현하면
for i in word_1:
	for j in word_2:
"""

result = [[i+j for i in word_1] for j in word_2]

"""
위 코드를 표현하면
for j in word_2:
	line = []
	for i in word_1:
		line.append(i+j)

순서가 바뀌어 있음
"""

"""
2 dimensional code
"""

words = 'The quick brown fox jumps over the lazy dog'.splilt()
stuff = [[w.upper(), w.lower(), len(w)] for w in words]

for i in stuff:
	print(i)

"""
['THE', 'the', 3],
['QUICK', 'quick', 5]
...
['Dog', 'dog', 3]
"""
</code></pre>

## enumerate & zip

> enumerate : list 의 element 를 추출할 때 번호를 붙여서 추출
> 

<pre><code class="python">for i, v in enumerate(['tic', 'tac', 'toe']):
	print(i, v)

"""
0 tic
1 tac
2 toe
"""
</code></pre>

> zip : 두 개의 list 의 값을 병렬적으로 추출함
> 

<pre><code class="python">alist = ['a1', 'a2', 'a3']
blist = ['b1', 'b2', 'b3']

for a, b in zip(alist, blist):
	print(a,b)  #tuple

"""
a1 b1
a2 b2
a3 b3
"""

# enumerate + zip
alist = ['a1', 'a2', 'a3']
blist = ['b1', 'b2', 'b3']

for i, values in enumerate(zip(alist, blist)):
	print(i, values)

"""
0 ('a1', 'b1')
1 ('a2', 'b2')
2 ('a3', 'b3')
"""
</code></pre>

## lambda & map & reduce `important`

> lambda  : 함수 이름 없이, 함수처럼 쓸 수 있는 익명함수
> 

<pre><code class="python">#general function
def f(x,y):
	return x+y

print(f(1,4))

#lambda function
f = lambda x, y:x+y
print(f(1,4))

(lambda x,y:x+y)(10,50)
</code></pre>

**`pep8 에서는 lambda 사용을 권장하지 않음`**

**Why?**

- 어려운 문법
- 테스트의 어려움
- 문서화 docstring 지원 미비
- 코드 해석의 어려움
- 이름이 존재하지 않는 함수의 출현
- 그래도 많이 쓰임,,,

## map

> 두 개 이상의 list 에도 적용 가능함, if filter 사용가능
> 

<pre><code class="python">ex = [1,2,3,4,5]
f = lambda x:x**2

print(list(map(f, ex))) # 각각 적용하는 거임
# 1 4 9 16 25

[f(value) for value in ex]
</code></pre>

**`list comprehension`** 으로 해결하는 게 더 간단함

## reduce

> map function 과 달리 list 에 똑같은 함수를 적용해서 통합
> 

<pre><code class="python">from functools import reduce
print(reduce(lambda x,y:x+y, [1,2,3,4,5]))

#15
</code></pre>

## generator

> 메모리 효율
> 

<pre><code class="python">def generator_list(value):
	result = []
	for i in range(value):
		yield i

for _ in generator_list(50):
	print(_)

# generator comprehension
gen_ex = (n*n for n in range(50))
print(type(gen_ex))
# generator
</code></pre>

**When generator**

- list 타입의 데이터를 반환해주는 함수는 generator로 만들어라!
    - 읽기 쉬운 장점, 중간 과정에서 loop 이 중단될 수 있을 때
- 큰 데이터를 처리할 때는 generator expression 을 고려하라!
    - 데이터가 커도 처리의 어려움이 없음
- 파일 데이터를 처리할 때도 generator 를 쓰자

## function passing arguments

- keyword args
- default args
- variable-length args

**Keyword arguments**

> 함수에 입력되는 parameter 의 변수명을 사용, arguments 를 넘김
> 

<pre><code class="python">def print_sth(my_name, your_name):
	print(f"Hello {your_name}, My name is {my_name}")

print_sth(your_name="TEAMLAB", my_name="Sihyun")
# Hello TEAMLAB, My name is Sihyun
</code></pre>

**Default arguments**

> parameter 의 기본 값을 사용, 입력하지 않을 경우 기본값 출력
> 

<pre><code class="python">def print_sth(my_name, your_name="TEAMLAB"):
	print(f"Hello {your_name}, My name is {my_name}")

print_sth("Sihyun", "TEAMLAB")
print_sth("Sihyun")
</code></pre>

**variable-length asterisk**

> 함수의 parameter 가 정해지지 않았다
> 
- 개수가 정해지지 않은 변수를 함수의 parameter 로 사용하는 법
- Keyword arguments 와 함께, argument 추가가 가능
- `Asterisk(*)` 기호를 사용하여 함수의 parameter 를 표시함
- 입력된 값은 `tuple type` 으로 사용할 수 있음
- 가변인자는 오직 한 개만 맨 마지막 parameter 위치에 사용가능

<pre><code class="python">def asterist_test(a, b, *args):
	return a+b+sum(args)

print(asterist_test(1,2,3,4,5))
# 1 -> a, 2->b, 3,4,5 -> args
</code></pre>

**Keyword variable-length**

- Parameter 이름을 따로 지정하지 않고 입력하는 방법
- `asterisk(*) 두 개를 사용` 하여 함수의 parameter 를 표시함
- 입력된 값은 `dict type` 으로 사용할 수 있음
- 가변인자는 오직 한 개만 기존 가변인자 다음에 사용

<pre><code class="python">def kwargs_test(**kwargs):
	print(kwargs)

kwargs_test(first=3, second=4, third=5)
# {'first' : 3, 'second' : 4, 'third':5} 
</code></pre>

**asterisk - unpacking a container**

- tuple, dict 등 자료형에 들어가 있는 값을 unpacking
- 함수의 입력값, zip 등에 유용하게 사용가능

<pre><code class="python">def asterisk_test(a, *args):
	print(a, *args) # 풀어주는 역할
	print(a, args)

asterist_test(1, *(2,3,4,5,6))
# 1,2,3,4,5,6
# 1, (2,3,4,5,6)
</code></pre>