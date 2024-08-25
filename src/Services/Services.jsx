import React from 'react'
import './Services.css'
// import { GoArrowRight } from "react-icons/go";
import weblogo from '/web.logo.png'
import mobile from '/mobile.logo.png'
import ui from '/ui.png'
import graphic from '/graphic.png'
function Services() {
    return (
        <>
            <div className='services' id='services'>
                <h2>My <span>Services</span></h2>
                <h5>What I Offer</h5>
                <p>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

                <div className="box-contain">
                    <div className="box-container">
                        <div className="box">
                            <div className="logo">
                                <img className='weblogo' src={weblogo} alt="" />
                                <h3>Web <span>Design</span></h3>
                                <p>Web development is the process of building, programming...</p>
                                <h5>Read More
                                    <img style={{ marginLeft: "1rem", width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII=" alt="" class="w-4"></img></h5>
                            </div>

                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box">
                            <div className="logo">
                                <img className='weblogo' src={mobile} alt="" />
                                <h3>Mobile<span>App</span></h3>
                                <p>Web development is the process of building, programming...</p>
                                <h5>Read More
                                    <img style={{ marginLeft: "1rem", width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII=" alt="" class="w-4"></img></h5>
                            </div>


                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box">
                            <div className="logo">
                                <img className='weblogo' src={ui} alt="" />
                                <h3>UI/ UX <span>Design</span></h3>
                                <p>Web development is the process of building, programming...</p>
                                <h5>Read More
                                    <img style={{ marginLeft: "1rem", width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII=" alt="" class="w-4"></img></h5>
                            </div>

                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box">
                            <div className="logo">
                                <img className='weblogo' src={graphic} alt="" />
                                <h3>Graphics<span>Design</span></h3>
                                <p>Web development is the process of building, programming...</p>
                                <h5>Read More
                                    <img style={{ marginLeft: "1rem", width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII=" alt="" class="w-4"></img></h5>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Services