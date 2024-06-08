import React from 'react'
import './About.css'

function About() {
  return (
    <>
        <div className="MainCard">
            {/* make 4 card | check with css | check classes */}
            <div className="card1">
                {/* images always in public folder projectname-public-imgFolderName-imgname */}
                <div className="img1"><img src="/img/1.jpg" alt="Image 1" /></div> 
                <div className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quas. Repudiandae ipsa perspiciatis ad esse. Aut cupiditate corporis reprehenderit repellat quis maiores saepe itaque, at sapiente architecto numquam velit quos repellendus ratione vitae expedita illum dolore inventore recusandae reiciendis possimus. 1</div>
            </div>
            <div className="card2">
                <div className="text2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quas. Repudiandae ipsa perspiciatis ad esse. Aut cupiditate corporis reprehenderit repellat quis maiores saepe itaque, at sapiente architecto numquam velit quos repellendus ratione vitae expedita illum dolore inventore recusandae reiciendis possimus. 2</div>
                <div className="img2"><img src="/img/2.jpg" alt="Image 1" /></div>
            </div>
            <div className="card3">
                <div className="img1"><img src="/img/3.jpg" alt="Image 1" /></div>
                <div className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quas. Repudiandae ipsa perspiciatis ad esse. Aut cupiditate corporis reprehenderit repellat quis maiores saepe itaque, at sapiente architecto numquam velit quos repellendus ratione vitae expedita illum dolore inventore recusandae reiciendis possimus. 3</div>
            </div>
            <div className="card2">
                <div className="text2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quas. Repudiandae ipsa perspiciatis ad esse. Aut cupiditate corporis reprehenderit repellat quis maiores saepe itaque, at sapiente architecto numquam velit quos repellendus ratione vitae expedita illum dolore inventore recusandae reiciendis possimus. 4</div>
                <div className="img2"><img src="/img/4.jpg" alt="Image 1" /></div>
            </div>
        </div>
    </>
  )
}

export default About
