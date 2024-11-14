import Scrap1 from "../../public/scrap 1.jpeg"
import Scrap2 from "../../public/scrap 2.jpeg"
import { Key, useState } from "react";

interface Santa {
  name: string,
  gifts: string
}

const santas: Santa[] = [
  {name: 'Bryce', gifts: 'Q2Fyb2xlLEphY2s='},
  {name: 'Caitlin',gifts:  'SnVsaWEsUm9i'},
  {name: 'Carole', gifts: 'Um9iLEV3YW4='},
  {name: 'Ewan', gifts: 'QnJ5Y2UsQ2FpdGxpbg=='},
  {name: 'Jack', gifts: 'Q2FpdGxpbixKdWxpYQ=='},
  {name: 'Julia', gifts: 'RXdhbixDYXJvbGU='},
  {name: 'Rob', gifts: 'SmFjayxCcnljZQ=='}
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
    const imgSrc = i === 0 ? Scrap1 : Scrap2;
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
              </>
            }
        </>
      }
    </>
  )
}

export default Santa;