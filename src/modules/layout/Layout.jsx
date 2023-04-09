import { Footer, Header, Social } from "../index"

function Layout({children}) {

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Social />
    </>
  )
}

export default Layout
