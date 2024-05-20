let username = document.getElementById("username");
let userphone = document.getElementById("userphone");
let usermassage = document.getElementById("usermassage");
let useryung = document.getElementById("useryung");
let useraddres = document.getElementById("useraddres");
let userschool = document.getElementById("userschool");
let button = document.querySelector("button");



button.addEventListener("click", () => {
    let massage = `Ismi: ${username.value},  yoshi: ${useryung.value}, Manzil: ${useraddres.value}, Telefon: ${userphone.value}, Maktabi: ${userschool.value}, Xabar: ${usermassage.value}`;
    sendtelegram(massage)
});


// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6901022255:AAEMC8hpPpk5lBe1HkPbw3iaPfsEzi8A80c"; let chat_id = 5765573073; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };