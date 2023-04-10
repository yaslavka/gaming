import React from "react";

function Preloader() {
  return (
    <>
      <div style={{ overflow: "hidden",}} className="visible">
        <div className="preloader js-preloader">
          <div className="preloader-logo-evoplay" id="evoplayLogo">
            <div className="logo-container">
              <div className="evoplay_word">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 544 90">
                  <g id="evoplay">
                    <polygon className="st0" points="166.1,65.3 131.8,65.3 131.8,55.2 149.7,55.2 155.6,41.2 131.8,41.2 131.8,31.6 159.7,31.6 166,16.6 166,16.5 114.3,16.5 114.3,80.4 166.1,80.4"/>
                    <path className="st0" d="M354.9,22.5c-4.8-4-11.2-6-19.4-6h-27.4v63.9h17.7V62.1h8.8c8.2,0,14.8-2,19.9-6c5-4,7.6-9.7,7.6-17 C362.1,32,359.7,26.5,354.9,22.5z M341.7,46c-1.8,1.5-4.3,2.3-7.4,2.3h-8.4V31.4h8.3c3.2,0,5.7,0.7,7.5,2.1 c1.8,1.4,2.7,3.5,2.7,6.3C344.4,42.4,343.5,44.5,341.7,46z"/>
                    <polygon className="st0" points="386,64.9 386,16.5 368.3,16.5 368.3,80.4 407.4,80.4 414,64.9"/>
                    <path className="st0" d="M461.2,16.1h-17.1l-22.9,54.1l-4.3,10.3h6h12.7l4.6-11.4h24.6l4.7,11.4h19L461.2,16.1z M445.3,55.2l7.2-18.2 l7.1,18.2H445.3z"/>
                    <polygon className="st0" points="524.2,16.5 511,39.8 497.8,16.5 477.6,16.5 501.9,56.5 501.9,80.4 519.7,80.4 519.7,56.2 544,16.5"/>
                    <polygon className="st0" points="218.4,16.5 203.9,56.9 189.4,16.5 169.6,16.5 195.5,80.9 211.9,80.9 237.8,16.5"/>
                    <path className="st0" d="M267.8,15.4c-18.3,0-33.2,14.9-33.2,33.2c0,18.3,14.9,33.2,33.2,33.2S301,66.9,301,48.6 C301,30.2,286.1,15.4,267.8,15.4z M267.8,66c-9.6,0-17.4-7.8-17.4-17.4c0-9.6,7.8-17.4,17.4-17.4c9.6,0,17.4,7.8,17.4,17.4 C285.2,58.2,277.4,66,267.8,66z"/>
                  </g>
                </svg>
              </div>
              <div className="logo_symbol">
                <div className="black"/>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 544 90">
                  <g id="e_symbol">
                    <polygon id="black" points="0,0 0,98 51,98 93,-1"/>
                    <polygon className="st1" points="0.3,89.3 54.6,89.3 62.6,70.5 0.3,70.5 "/>
                    <polygon className="st1" points="0.3,66.9 68.2,57.5 76.8,37.1 0.3,47.8"/>
                    <polygon className="st1" points="0.3,24.4 0.3,44.1 82.8,22.9 92.5,0.2"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="preloader-progress">
            <div className="preloader-progress__bar_back"></div>
          </div>
          <div className="preloader-progress">
            <div className="preloader-progress__bar js-preloader-bar" style={{width: '100%'}}></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Preloader
