import React from "react";
import "../style/fserviced.css";

const Fserviced = () => {
    return(
    <>
    <div className = "FContainer">

        <div className='FpageTitle'>
            <div className='Ftitle'><div>Featured Services</div>
            <div className='Ftitle2'>See All</div>
            </div>
            <div className='Fsubtitle'>Selected to match your business needs</div>
        </div>

        <div className='FmainContainer'>
                <div className='Fcontainer'>
                    <div className='Fimage'>
                        <img src={require('../image/short.png')} />
                    </div>

                    <div className='Fcontent'>
                        <div>Short and Long term working Capital</div> 
                    </div>

                    <div className='Fbutton'>
                    <img src={require('../image/learnmore.png')} />
                    </div>
                </div>

                <div className='Fcontainer'>
                    <div className='Fimage'>
                        <img src={require('../image/excess.png')} />
                    </div>

                    <div className='Fcontent'>
                        <div>Excess Cash? Here’s How to Make It Grow</div> 
                    </div>

                    <div className='Fbutton'>
                    <img src={require('../image/learnmore.png')} />
                    </div>
                </div>

                <div className='Fcontainer'>
                    <div className='Fimage'>
                        <img src={require('../image/project.png')} />
                    </div>

                    <div className='Fcontent'>
                        <div>Project and Assets Financing</div> 
                    </div>

                    <div className='Fbutton'>
                    <img src={require('../image/learnmore.png')} />
                    </div>
                </div>

                <div className='Fcontainer'>
                    <div className='Fimage'>
                        <img src={require('../image/payment.png')} />
                    </div>

                    <div className='Fcontent'>
                        <div>Payment Solutions for Retailers</div> 
                    </div>

                    <div className='Fbutton'>
                    <img src={require('../image/learnmore.png')} />
                    </div>
                </div>
        </div>
    </div>
    </>
    );
};
export default Fserviced;
