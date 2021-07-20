const quotes = [
    {
        quote: "사람 인생은 알 수가 없어요",
        author: "꼬북좌",
    },
    {
        quote: "팬은 무슨, 친구나 해요",
        author: "단발좌",
    },
    {
        quote: "마빠볼까?",
        author: "홍은지",
    },
    {
        quote: "메리 츄석~",
        author: "꼬북좌",
    },
    {
        quote: "포기하지 말아요 우리. 저에게 왔듯, 여러분께도 오고 있을 그 모든것들을!",
        author: "꼬북좌",
    },
    {
        quote: "앞으로 받을 사랑 중에 제 사랑이 가장 작았으면 좋겠습니다",
        author: "무명의 쁘걸 팬",
    },
    {
        quote: "안되면 되는걸 해라",
        author: "유정, DM으로 받은 그림을 보고 남긴 답장",
    },
    {
        quote: "아당당당 아당당당 아당당당당당당당",
        author: "꼬북좌",
    },
    {
        quote: "힘을내요 돼지파월~",
        author: "꼬북좌",
    },
    {
        quote: "나 아직 20대야!",
        author: "단발좌",
    },
    {
        quote: "뭐지? 내가 놓친건가?",
        author: "단발좌",
    },
    {
        quote: "어머니가 물려주신 타고난 목소리 천상의 목소리 브레이브걸스 메인보컬이에요",
        author: "메보좌",
    },
    {
        quote: "하나둘서이너이다섯!!!",
        author: "메보좌",
    },
    {
        quote: "헛소리하지말고 본론을 말해",
        author: "메보좌",
    },
    {
        quote: "'360도' 바뀌었어요",
        author: "메보좌",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//const todaysQuote = quotes[4];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;