# Notion_Infosot_Assignment

# Admin email- saurabhkumar.me24@gmail.com,

# Admin password:-> abc

<br/>

- <h2> Base_URL</h2>
  <a>https://infoset-backend.herokuapp.com/</a>

  # Admin Login

  - <h2>Post

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

- <h2>Post

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

<h2>Get
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
