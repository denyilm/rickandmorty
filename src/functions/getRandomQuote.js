/* eslint-disable no-unused-vars */
const quotes = [
  {
    'quote':'Weddings are basically just funerals with cake.',
    'character':'Rick'
  },
  {
    'quote':'Wubba Lubba Dub Dub!',
    'character':'Rick'
  },
  {
    'quote':'...Break the cycle, Morty. Rise above. Focus on science.',
    'character':'Rick'
  },
  {
    // eslint-disable-next-line quotes
    'quote': "Life is effort and I'll stop when I die!",
    'character':'Jerry'
  },
  {
    'quote':'...Welcome To The Club, Pal.',
    'character':'Rick'
  },
  {
    'quote':'Rick, what about the reality we left behind?',
    'character':'Morty'
  },
  {
    // eslint-disable-next-line quotes
    'quote': "It's time to get schwifty",
    'character':'Morty'
  }
]

const getRandomQuotes = () => {
  let quote
  let length = quotes.length
  quote = quotes[[Math.floor(Math.random()*length)]]
  return { quote: quote.quote, character: quote.character }
}

export default getRandomQuotes

