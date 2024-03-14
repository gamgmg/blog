# MySQL

## 安装(mac)

使用 Homebrew 安装 MySQL

```bash
brew install mysql
```

启动服务

```bash
brew services start mysql
```

停止服务

```bash
brew services stop mysql
```

关联 mysql

```bash
brew link mysql
```

or

```bash
brew link --overwrite mysql
```

启动服务后可以执行`mysql_secure_installation`给 mysql 设置密码

```bash
mysql_secure_installation
```

## 常用语句

新增数据库

```sql
CREATE DATABASE database_name;
```

删除数据库

```sql
DROP DATABASE database_name;
```

查询数据库

```sql
SHOW DATABASES;
```

使用数据库

```sql
USE database_name;
```

新增表

```sql
CREATE TABLE table_name (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);
```

删除表

```sql
DROP TABLE table_name;
```

查询表结构

```sql
DESCRIBE table_name;
```

给表添加列

```sql
ALTER TABLE table_name ADD COLUMN column_name column_type;
```

给表删除列

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

给表修改列类型

```sql
ALTER TABLE table_name MODIFY COLUMN column_name column_type;
```

给表修改列名

```sql
ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name column_type;
```

给表插入数据

```sql
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
```

给表删除数据

```sql
DELETE FROM table_name WHERE column_name = value;
```

给表更新数据

```sql
UPDATE table_name SET column_name = value, column_name2 = value2 WHERE condition;
```

查询表数据

```sql
SELECT * FROM table_name WHERE condition;
```
