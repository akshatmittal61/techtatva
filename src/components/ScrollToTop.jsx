import React, { useState } from 'react'

const ScrollToTop = ({ startAfter = 200, takeTo = 0 }) => {
    const [showScrollButton, setshowScrollButton] = useState(false);
    window.onscroll = () => {
        if (document.documentElement.scrollTop > startAfter) setshowScrollButton(true);
        else setshowScrollButton(false);
    }
    function topFunction() {
        document.body.scrollTop = takeTo;
        document.documentElement.scrollTop = takeTo;
    }
    return (
        <>
            {
                showScrollButton && (
                    <button className="scroll-to-top" onClick={topFunction}>
                        <span className="material-icons">
                            arrow_upward
                        </span>
                    </button>
                )
            }
        </>
    )
}

export default ScrollToTop
