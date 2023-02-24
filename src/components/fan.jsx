import Fanwave from '../Images/Fanwave.svg';

export default function Fan() {
    return (
      <div className="header">
      <header>
      <svg className="fan" id="fan" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <g id="arms" >
        <path className="arms" id="Vector" d="M43.45 112.02C49.81 115.4 57.7 112.98 61.08 106.62L77.58 75.55C80.96 69.19 78.54 61.3 72.18 57.92C65.82 54.54 57.93 56.96 54.55 63.32L38.05 94.39C34.67 100.75 37.09 108.64 43.45 112.02Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        <path id="Vector_2" d="M133.74 112.02C127.38 115.4 119.49 112.98 116.11 106.62L99.61 75.55C96.23 69.19 98.65 61.3 105.01 57.92C111.37 54.54 119.26 56.96 122.64 63.32L139.14 94.39C142.52 100.75 140.1 108.64 133.74 112.02Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        </g>
        <g id="body">
        <path id="Vector_3" d="M89.15 134.88C75.98 134.88 65.3 124.2 65.3 111.03V72.46C65.3 59.29 75.98 48.61 89.15 48.61C102.32 48.61 113 59.29 113 72.46V111.03C112.99 124.2 102.31 134.88 89.15 134.88Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        <path id="Vector_4" d="M89.15 51.29C75.98 51.29 65.3 40.61 65.3 27.44C65.3 14.28 75.98 3.6 89.15 3.6C102.32 3.6 113 14.28 113 27.45C112.99 40.61 102.31 51.29 89.15 51.29Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        </g>
        <g id="legs" className="legs">
        <path id="Vector_5" d="M74.46 173.59C67.26 173.59 61.43 167.75 61.43 160.56V125.38C61.43 118.18 67.27 112.35 74.46 112.35C81.66 112.35 87.49 118.19 87.49 125.38V160.56C87.49 167.76 81.66 173.59 74.46 173.59Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        <path id="Vector_6" d="M104.73 173.59C97.53 173.59 91.7 167.75 91.7 160.56V125.38C91.7 118.18 97.54 112.35 104.73 112.35C111.93 112.35 117.76 118.19 117.76 125.38V160.56C117.76 167.76 111.93 173.59 104.73 173.59Z" fill="#FEDA00" stroke="black" stroke-miterlimit="10"/>
        </g>    
        </g>
        </svg>
        <img src={Fanwave} className="fan" alt="fanwave" />
      </header>
      </div>
    );
  }