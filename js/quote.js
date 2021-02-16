window.addEventListener('load', () => {
    const quotes = [
        "“You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.”",
        "“Your time is limited, so don’t waste it living someone else’s life.”",
        "“Don’t let the noise of others’ opinions drown out your own inner voice.”",
        "“Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.”",
        "“Stay hungry. Stay foolish.”",
        "“If today were the last day of your life, would you want to do what you are about to do today?”",
        "“I think the things you regret most in life are the things you didn’t do.”",
        "“Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.”",
        "“We’re here to put a dent in the universe. Otherwise why else even be here?”",
        "“Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.”",
        "“My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.”",
        "“I’m convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.”",
        "“Innovation distinguishes between a leader and a follower.”",
        "“I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.”",
    ];
    
    document.querySelector('.quote-text').textContent = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
});
