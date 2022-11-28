//create testimonials
const testimonials = [
    {
        name : "گوته",
        picUrl : "./images/user1.jpg",
        text :"كسی كه دارای عزمی راسخ اسـت، جهان را مطابق میل خویش عوض می كند"
    },
    {
        name : "جانسون",
        picUrl : "./images/user2.jpg",
        text : "بهتر اسـت ثروتمند زندگی کنیم تا این کـه ثروتمند بمیریم"
    },
    {
        name : "دیل کارنگی",
        picUrl : "./images/user3.jpg",
        text : "اگر می بیني کسی بـه روی تو لبخند نمی زند علت را در لبان فرو بسته ي خود جست‌وجو کن"
    },
    {
        name : "سقراط  ",
        picUrl : " ./images/user4.jpg",
        text : "شیرینی یک‌بار پیروزی بـه تلخی صد بار شکست می‌ارزد"
    },
    {
        name : "پونگ",
        picUrl : " ./images/user5.jpg",
        text : "یقیناً خاک و کود لازم اسـت تا گل سرخ بروید. اما گل سرخ نه خاک اسـت و نه کود"
    },

];

//define variable
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")
//run function
let idx = 0;
changetestimonial();

//create function
function changetestimonial(){
    //get one of the Element of the testimonial array
    const {name, picUrl, text} = testimonials[idx]
    //display each of element in output
    imgEl.src = picUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    //increase array number
    idx++;
    //resetslider
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        changetestimonial();
    },8000);
}