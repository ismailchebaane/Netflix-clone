import React from 'react'
import NavBar from '../NavBar/NavBar'
import Featured from '../Featured/Featured'
import List from '../List/List'
import { images1, images2, images3 ,images4 } from '../List/Data'
import Footer from '../Footer/Footer'
function Home() {
    
    return (
        <div className="home truncate	">
            <NavBar />
           <Featured  />
         <div className=''>
           <List id={10} src={images1} title="Continue to Watch"/>
           <List id={20} src={images2} title="Tranding Now" />
           <List id={30} src={images3} title="New Releases" />
           <List id={40} src={images4} title="Top Picks" />
        </div>
         <Footer />
        </div>
    )
}

export default Home
