# TO DO LIST
1. 考慮加入管理員後台
   -> Admin帳號，擁有管理員權限，會多出一個user list頁面，可以BAN或刪掉USER
   -> Admin帳號對使用者PO的圖可以管到多少？刪除？下架？修改內文？
2. 考慮把CSS整合在一起
   -> 目前：模板內建的放在src\assets\css\templatemo-cyborg-gaming.css、自訂的放在src\App.css

# 標準色
primary `#2e68ff`
secondary `#618dff`
紫色 `#be58fe`

# Schema
Database: artisan

## Table1: user
+-------------------------------------------------------------------------------------+
| id(PK) | name | password | tags | about | upload-works | saved-works | created-date |
|-------------------------------------------------------------------------------------|
|   01   | John | (base64) |      |       | [38, 05, 12] | [22, 34, 53]|  2022-07-20  |
|-------------------------------------------------------------------------------------|
|   02   | Meow | (base64) |      |       | [01, 11    ] | [02, 08, 16]|  2023-01-21  |
|-------------------------------------------------------------------------------------|
|   03   | BABA | (base64) |      |       | [01, 11    ] | [02, 08, 16]|  2024-04-12  |
+-------------------------------------------------------------------------------------+

+------------------------------------+
|     follower    |     following    | 
|------------------------------------|
| [12, 2323, 356] | [123, 3, 89, 64] |
+------------------------------------+

id: INT
name: VARCHAR(45)
password: TEXT(base64 + hash加密過)
tags: 
  * DB: TEXT (EX. [digital_art, colored art, ...])
  * PO: List<String>
about: TEXT
upload-works: 存的是上傳的作品(work)的id (FK)
  * DB: TEXT (EX. [38, 05, 12, ...])
  * PO: List<int>
saved-works: 收藏的作品(work)的id (FK)
  * DB: TEXT (EX. [38, 05, 12, ...])
  * PO: List<int>
created-date: DATE
follower: 存的是追蹤者(user)的id
  * DB: TEXT (EX. [12, 2323, 356, ...])
  * PO: List<int>

* works存的是works的id(FK)陣列 
* tags 字串(用逗號,分隔，進JAVA再用split分割成List<String>)
* about 不超過一定字數的自我介紹

## Table2: work
+------------------------------------------------------------------------------------+
| id(PK) | name  | tags | description | likes | saved-count | img-url | created-date |
+------------------------------------------------------------------------------------+

id: INT
name: VARCHAR(45)
tags: TEXT (EX. [digital_art, colored art, ...])
description: TEXT
likes: INT (被按讚的次數)
saved-count: INT (被收藏的次數)
img-url: 可能是加密過的字串？
created-date: DATE

* description 採用 WYSIWYG or Markdown(暫定)，可以內嵌影片










