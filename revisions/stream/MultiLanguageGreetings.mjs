import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  const { language, greeting } = getRandomGreeting()
  res.write(`Hello in ${language} is ${greeting}`)
  res.end('\n')
}).listen(3000)

function getRandomGreeting () {
  const greetings = [
    { language: "french", greeting: "Bonjour" },
    { language: "english", greeting: "Hello" },
    { language: "spanish", greeting: "Hola" },
    { language: "german", greeting: "Guten Tag" },
    { language: "italian", greeting: "Ciao" },
    { language: "portuguese", greeting: "Olá" },
    { language: "russian", greeting: "Здравствуйте" }, // Zdravstvuyte
    { language: "arabic", greeting: "مرحبا" }, // Marhaba
    { language: "japanese", greeting: "こんにちは" }, // Konnichiwa
    { language: "chinese", greeting: "你好" } // Nǐ hǎo
  ];

  return greetings[Math.floor(Math.random() * greetings.length)]
}