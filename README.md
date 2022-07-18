# Notion_Infosot_Assignment

# Admin email- saurabhkumar.me24@gmail.com,

# Admin password:-> abc

<br/>

- <h2> Base_URL</h2>
  <a>https://infoset-backend.herokuapp.com/</a>

  # Admin Login

  - <h2> Method:Post</h2>

url:- Base_URL + admin/login
<br>

  <h2 style="color:red">body<h2><br>
  {<br>

"a_email":"saurabhkumar.me24@gmail.com",<br>
"a_password":"abc"<br>

}
<br>

<h2 style="color:red">response</h2><br>
{<br><p style="color:black">
    "status": true,<br>
      "admin": { <br>
        "_id": "62d134ea6a6032910b94f15d", <br>
        "a_firstName": "Saurabh Kumar", <br>
        "a_lastName": "Bhardwaj", <br>
        "a_email": "saurabhkumar.me24@gmail.com", <br>
        "a_password": "abc", <br>
        "__v": 0 <br>
    } <br>
} <br>
 <br>
 </p>

# Admin Register

- <h2> Method:Post<h2>

url:- Base_URL + admin/create
<br>

  <h2 style="color:red">body<h2><br>
  {<br>
 "a_firstName": "Saurabh Kumar", <br>
        "a_lastName": "Bhardwaj", <br>
"a_email":"saurabhkumar.me24@gmail.com",<br>
"a_password":"abc"<br>

}
<br>

<h2 style="color:red">response</h2><br>
{<br><p style="color:black">
    "status": true,<br>
      "admin": { <br>
        "_id": "62d134ea6a6032910b94f15d", <br>
        "a_firstName": "Saurabh Kumar", <br>
        "a_lastName": "Bhardwaj", <br>
        "a_email": "saurabhkumar.me24@gmail.com", <br>
        "a_password": "abc", <br>
        "__v": 0 <br>
    } <br>
} <br>
 <br>
 </p>

# Get movie

<h2>Method:Get</h2>
 url:- Base_URL +movie/
 <br>
 <h1>Response</h1>
 <br>
 {<br>
    "status": true,<br>
    "movie": [<br>
        {
            "_id": "62d1bea3d6f3367c02ebc276",<br>
            "movie_Name": "Palm Beach Story, The",<br>
            "movie_Title": "Safety Last!",<br>
            "movie_Rating": "1.1",<br>
            "movie_Category": "Comedy",<br>
            "movie_Price": "$46.33"<br>
        },<br>
          ]<br>
}

<br>

# Create Movie

<h2>Method:POST</h2>
 url:- Base_URL +/create
 <br>
 <h1>Response</h1>
 <br>
 <h3>body</h3><br>
 {<br>
"movie_Name":"singham",<br>
"movie_Title":"most powerFull person",<br>
"movie_Rating":"8.9",<br>
"movie_Category":"action",<br>
"movie_Price":"400"<br>
  }<br>
  <h2>Response</h2><br>
  {<br>
    "status": true,<br>
    "movie": [<br>
        {<br>
            "movie_Name": "singham",<br>
            "movie_Title": "most powerFull person",<br>
            "movie_Rating": "8.9",<br>
            "movie_Category": "action",<br>
            "movie_Price": "400",<br>
            "_id": "62d1f904d87ba13ffddb7c8a",<br>
            "__v": 0<br>
        }<br>
    ]<br>
}<br>

# Delete Movie

<h2>Method:DELETE</h2><br>
_id=62d13eed72b4b923d464abf4<br>
 url:- Base_URL +deletemovie/`${_id}`<br>

 <h2>Response</h2><br>
{<br>
    "status": true,<br>
    "movie": {<br>
        "acknowledged": true,<br>
        "deletedCount": 1<br>
    }<br>
}<br>

# Update Movie

<h2>METHOD:PUT</h2><br>
_id=62d1f904d87ba13ffddb7c8a<br>
 url:- Base_URL +updatemovie/`${_id}`<br>
 <h2>body</h2><br>
 {<br>

"movie_Price":"900"<br>
}<br>

<h1>Response</h2>
   {<br>
    "status": true,<br>
    "movie": [<br>
        {<br>
            "movie_Name": "singham",<br>
            "movie_Title": "most powerFull person",<br>
            "movie_Rating": "8.9",<br>
            "movie_Category": "action",<br>
            "movie_Price": "900",<br>
            "_id": "62d1f904d87ba13ffddb7c8a",<br>
            "__v": 0<br>
        }<br>
    ]<br>
}<br>

# Home Page for user , Here user Can see tha all movie Data

<h3> User cannot have access of other option like Delete Movie, Edit Movies, Add Movie</h3>
<img src="./Images/Rea1.png" alt="Home Page"/>

# Login page for Admin

<h3> Here Admin can Login</h3>
<img src="./Images/Rea2.png" alt="Login Page"/>

# Loading Status

<img src="./Images/rea4.jpeg" alt="Loding Page"/>

# Create Movie

<h3>Here Admin can Enter Movie to database</h3>
<img src="./Images/rea5.jpeg" alt="movie create"/>

# Edit Page

<h3>Here Admin can Edit Movie's Field</h3>
<img src="./Images/rea6.jpeg" alt="Edit Page">
