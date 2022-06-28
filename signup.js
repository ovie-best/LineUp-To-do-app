// const form = document.getElementById("form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     var userEmail = document.getElementById("email");
//     var userPassword = document.getElementById("password");
//     var userDetails = {\r\n    \r\n   	\"email\": userEmail.value,\r\n	\"password\": userPassword.value\r\n    \r\n};

//     console.log([...userDetails]);
 
//     var requestOptions = {
//         method: "POST",
//         body: userDetails,
//         redirect: "follow"
//     }

//     fetch("https://todo22a.herokuapp.com/api/v1/user/register", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// })

// var raw = "{\r\n    \r\n    \"username\": \"Adegbite\",\r\n	\"email\": \"adegbite@gmail.com\",\r\n	\"password\": \"adeola\"\r\n    \r\n}";

// var requestOptions = {
//   method: 'POST',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://todo22a.herokuapp.com/api/v1/user/register", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));