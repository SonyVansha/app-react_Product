# Backend


```
Users                     Products
+-------------------+     +-------------------+
| UserID (PK)       |---->| ProductID (PK)    |
| Name              |     | Name              |
| Email             |     | Description       |
| ...               |     | Price             |
+-------------------+     | UserID (FK)       |
                          | ...               |
                          +-------------------+
```

### Environment Variables

```bash
# App
APP_PORT = 3000
SECRET_KEY = ja40vtgbr0s5tffmv7bew5cylcyzpfz7s5tffmv7

# Database
DB_USER = "your_db_user"
DB_PASSWORD = "your_db_password"
DB_HOST = "your_db_host"
DB_PORT = "3306"
DB_NAME = "your_db_name"
DB_DIALECT = mysql
```