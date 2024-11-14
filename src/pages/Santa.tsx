import { Key, useState } from "react";

interface Santa {
  name: string,
  gifts: string
}

const santas: Santa[] = [
  { name: 'Bryce', gifts: 'SmFjayxSb2I=' },
  { name: 'Caitlin', gifts: 'SnVsaWEsQ2Fyb2xl' },
  { name: 'Carole', gifts: 'Q2FpdGxpbixCcnljZQ==' },
  { name: 'Ewan', gifts: 'QnJ5Y2UsSnVsaWE=' },
  { name: 'Jack', gifts: 'Um9iLEV3YW4=' },
  { name: 'Julia', gifts: 'Q2Fyb2xlLENhaXRsaW4=' },
  { name: 'Rob', gifts: 'RXdhbixKYWNr' }
]

const Santa = () => {
  const [santa, setSanta] = useState('-')
  const [gifts, setGifts] = useState<string[]>([]);

  const santaOptions = (santa: Santa, index: Key) => {
    return <option key={index}>{santa.name}</option>
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSanta(e.target.value);
  }

  const handleReveal = () => {
    const confirm = window.confirm(`You're definitely ${santa}?`)
    if (confirm) {
      const Santa = santas.filter(s => s.name === santa)[0];
      setGifts(atob(Santa.gifts).split(','));
    } else {
      setSanta('-');
    }
  }

  const showGift = (gift: string, i: Key) => {
    return <>
      <div className={"gift-scrap gift-scrap-" + i}>
        <p className="card-text">{gift.toUpperCase()}</p>
      </div>
    </>
  }

  return (
    <>
      <h1>&#127877; Secret Santa &#127876;</h1>
      <p>Who are you?</p>
      <select className='input' value={santa} onChange={handleChange}>
        <option>-</option>
        {santas.map(santaOptions)}
      </select>
      {
        santa !== '-' &&
        <>
          <p>If you are certain that you are <b>{santa}</b>, click below to reveal.</p>
          <button className='input' onClick={handleReveal}>Reveal</button>
            {
              gifts.length > 0 &&
              <>
                <p>You are buying gifts for:</p>
                <div className="row">
                {gifts.map(showGift)}
                </div>
                <p>Take note of the names ... or you can come back here if you need a reminder.</p>
              </>
            }
        </>
      }
    </>
  )
}

export default Santa;