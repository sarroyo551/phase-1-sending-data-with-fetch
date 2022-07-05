// Add your code here
/*const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        dogName: 'Byron',
        dogBreed: 'Poodle',
    }),
}

fetch('http://localhost:3000/dogs', configurationObject);*/


/*fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
});*/

/*const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
        alert('Bad things! Ragnarők!')
        console.log(error.message)
    })
*/

    function submitData (name, email) {
      return fetch("http://localhost:3000/users", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name:name,
          email:email,
        }),
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (newUser) {
          const body = document.querySelector('body')
          body.append(newUser.id)
        })  
        .catch(function (error) {
          const body = document.querySelector('body')
          body.append(error.message)
      })
    }