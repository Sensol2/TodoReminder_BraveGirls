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
        author: "브레디크걸스",
    },
    {
        quote: "메리 추석~",
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
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//const todaysQuote = quotes[4];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;