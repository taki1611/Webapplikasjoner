//Layout komponent fra kurset 

//Ville bare kommenter her at jeg har samarbeidet med Leo Barzinje med denne oppgaven 
import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="layout">{children}</main>
    </>
  )
}

export default Layout