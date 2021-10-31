//navigation  fra kurset

//Ville bare kommenter her også at jeg har samarbeidet med Leo Barzinje med denne oppgaven 
import Link from 'next/link'


const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
    
         <li>
        <Link href="/" passHref>
           <a className="first"> Hjem</a> 
           </Link>
        </li>
        <li>
        <Link href="/quiz" passHref>
           <a className="first"> quiz</a> 
           </Link>
        </li>
        <li>
        <Link href="/quiz/create" passHref>
           <a className="first"> create quiz</a> 
           </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation