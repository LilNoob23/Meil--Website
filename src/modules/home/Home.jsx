import Contact from '../contact/contact'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <main>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="name">
                    <h1>MEILIN GUERRERO</h1>
                </div>
            </main>
            <section>
                <h2>ABOUT SECTION</h2>
            </section>
            <Contact />
        </div>
    )
}

export default Home