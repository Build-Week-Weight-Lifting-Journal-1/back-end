The base URL for this project is: https://webpt7-weightliftingjournal.herokuapp.com/

Product Canvas: https://github.com/Build-Week-Weight-Lifting-Journal-1/back-end.git

Endpoints: Endpoints use cookies to create sessions that are used for authentication purposes.

Login: https://webpt7-weightliftingjournal.herokuapp.com/api/auth/login
-You will need to make a Post request via axios or another library.
-object to be sent would look like this
{
    "username":"something",
    "password":"something"
}

Register: https://webpt7-weightliftingjournal.herokuapp.com/api/auth/register
-You will need to make a Post request via axios or another library.

Logout: https://webpt7-weightliftingjournal.herokuapp.com/api/auth/delete
-You will need to make a Delete request via axios or another library.

Get a list of users: https://webpt7-weightliftingjournal.herokuapp.com/api/users
-I understand that normally you wouldnt want to make something like this available, but this api is being used for development purposes and having access to this could help in development.
-You will need to make a Get request via axios or another library.

Get a list of all workouts: https://webpt7-weightliftingjournal.herokuapp.com/api/workouts
-You will need to make a Get request via axios or another library.

Get a list of all workouts for a specific date: https://webpt7-weightliftingjournal.herokuapp.com/api/workouts/:date
-You will need to make a Get request via axios or another library.

Create a new workout entry: https://webpt7-weightliftingjournal.herokuapp.com/api/workouts/newworkout
-You will need to make a Post request via axios or another library.
-object to be sent would look like this

{
    "exercise": "12341234",
    "muscle": "asdfasdfasdf",
    "sets": "44",
    "reps": "55",
    "weight": "777",
    "notes": "Started at 200 and increased weight by 5 per rep",
    "date": "01-09-2020"
}

Update a existing workout entry: https://webpt7-weightliftingjournal.herokuapp.com/api/workouts/update/:id
-You will need to make a Put request via axios or another library.
-You will need to change the URL ":id" part dynamically with the workout id that you would like to change.
-object to be sent would look like this with the differences 

{
    "id":3
    "exercise": "12341234",
    "muscle": "asdfasdfasdf",
    "sets": "44",
    "reps": "55",
    "weight": "777",
    "notes": "Started at 200 and increased weight by 5 per rep",
    "date": "01-09-2020"
}

Delete a existing workout entry: https://webpt7-weightliftingjournal.herokuapp.com/api/workouts/delete/:id
-You will need to make a Delete request via axios or another library.
-You will need to change the URL ":id" part dynamically with the workout id that you would like to change.
