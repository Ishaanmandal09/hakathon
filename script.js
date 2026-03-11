function checkNews(){

let text = document.getElementById("newsInput").value.toLowerCase();

let fakeKeywords = [
"shocking",
"secret cure",
"miracle",
"breaking truth",
"government hiding",
"100% proof",
"you won't believe"
];

let score = 0;

fakeKeywords.forEach(word => {
if(text.includes(word)){
score++;
}
});

let result = document.getElementById("result");

if(score >= 2){
result.innerHTML = "⚠️ Likely Fake News";
result.style.color = "red";
}
else{
result.innerHTML = "✅ Likely Real News";
result.style.color = "green";
}

}