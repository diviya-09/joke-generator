const button=document.getElementById("button");
const jokecontent=document.getElementById("jokecontent");
const joke=document.getElementById("joke");

button.onclick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')  // axios is used to connet the api and content
    .then(function(respone){
        button.textContent = "Next";
        joke.textContent="";
        jokecontent.textContent=respone.data.setup;
        setTimeout(function(){
            joke.textContent=respone.data.punchline;
        },1500);
    })
    .catch(function(error){
        console.log(error);
    })
};