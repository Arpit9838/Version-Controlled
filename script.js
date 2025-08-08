async function getQuote() {
    const res = await fetch("quotes.json");
    const quotes = await res.json();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = `"${randomQuote.q}"`;
    document.getElementById("author").innerText = `- ${randomQuote.a}`;
}
getQuote();

