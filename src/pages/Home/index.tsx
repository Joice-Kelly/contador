import { useState } from 'react'

const Home = () => {
  // Área do state
    const [text, setText] = useState('')
    const [words, setWords] = useState(0)
    const [characters, setCharacters] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    setText(text)
    setWords(countWords(text))
    setCharacters(countCharacters(text))
  }

  const countWords = (text: string) => {
    return text.split(' ').length
  }

  const countCharacters = (text: string) => {
    return text.replace(/\s+/g, '').length
  }

  // Área de renderização
  return (
    <div>
      <div>
        <h1>Contador de palavras</h1>
        <textarea onChange={handleChange} value={text} placeholder='Insira o texto aqui...'></textarea>
              </div>

      <div>
          <span>Palavra: {words}</span>
          <span>Caracters: {characters}</span>
      </div>
    </div>
  )
}

export default Home