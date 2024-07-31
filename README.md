# Attendance Management System

## Description

-Frontend = React
-Backend = Node.js
-DB = Mongodb

1. **Start server:**

   ```bash
   go to terminal
   cd attendance-system
   cd server
   npm start

   if it start sucessfully it show below message in terminal
   Connected to database successfully
   Listening on port 8080...
   ```

2. **Start client:**

   ```bash
   go to terminal
   cd attendance-system
   cd client
   npm start

   if it start sucessfully it show below message in terminal
   webpack compiled successfully
   ```

3. **Functions in web-page:**

   1. you can signup you self (i connected system to the mongodb)
   2. if signup dosent work
      -------mail id = "tonystark@gmail.com"
      -------password= "Tony@0311"
   3. after signup you can signin your self by using the "mail" and "password"
   4. after signin it redirect to main page
   5. in main page you can see the attendance details
   6. if you already logedin it redirect to main page

4. **Validations for Signup:**
   1. First name can only contain letters
   2. Last name can only contain letters
   3. Please enter a valid email address (email standart)
   4. Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character
