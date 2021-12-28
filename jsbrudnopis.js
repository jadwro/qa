    // let nrLitery = 0;
    // setInterval(() => {
    //     let tekst = "Śląsk Wrocław";
    //     dlugosc = tekst.length;
    //     if(nrLitery < dlugosc) {
    //         document.querySelector(".tytul").innerHTML += tekst.charAt(nrLitery);
    //         nrLitery++;
    //     }
    // }, 100);

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//     var jsonResponse = JSON.parse(req.responseText);
//     console.log(jsonResponse);
//     console.log(jsonResponse.posts[1].tresc);
//   }
// };

// req.open("GET", "https://api.npoint.io/92d85377e89fe15f22f5", true);
// req.send();

// req.open("PUT", "https://api.jsonbin.io/v3/b/61c0d003435982298611a64a/", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("X-Master-Key", "$2b$10$8h0HdHFll3gg3t5PE1Mlye3bRH8Ywd5hyVtoPq7Hw0IjB97qYUwbO");
// req.send('{"sample": "Hello World"}');

// req.open("GET", "https://api.jsonbin.io/v3/b/61c0d003435982298611a64a/latest", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$8h0HdHFll3gg3t5PE1Mlye3bRH8Ywd5hyVtoPq7Hw0IjB97qYUwbO");
// req.send();