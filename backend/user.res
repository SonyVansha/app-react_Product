
# Create User
POST /users
Content-Type: application/json

{
  "name": "Sony Vansha",
  "email": "sony@example.com",
  "password": "adminsony",
  "confirmPassword": "adminsony",
  "role": "admin"
}

# get all the users
GET /users

# get Single User
GET /users/(id)

# update a single user
PATCH /users/(id)
Content-Type: application/json

{
  "name": "Sony Vansha",
  "email": "sony@example.com",
  "password": "",
  "confirmPassword": "",
  "role": "admin"
}

# delete a single user
DELETE /users/(id)

### Login user and login again

# Login user
POST /login
Content-Type: application/json

{
  "email": "sony@example.com",
  "password": "adminsony"
}

# me check
GET /me

# logut user
DELETE /logout