const Response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
function extractData(response) {
    console.log(response.data.id);
    console.log(response.data.title);
    console.log(response.data.author.name);
    console.log(response.data.author.email);

    
}
extractData(Response);