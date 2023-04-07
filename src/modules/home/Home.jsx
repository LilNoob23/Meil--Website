import {Contact, About} from '../index'
import './home.css'

function Home() {

    const Main = () => {
        return <main>
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="name">
            <h1>MEILIN GUERRERO</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, minima</p>
        </div>
    </main>
    }
    return (
        <div className='home'>
            <Main/>
            <About/>
            <Contact />
        </div>
    )
}

export default Home