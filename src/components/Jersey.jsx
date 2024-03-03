
import '../assets/styles/Players.css'
import colors from '../data/colors.json'

export const Jersey = (props) => {

    // console.log(props)

    const getColor = (loc) => {
        return (colors[props.team][loc])
    }

    return (
        <svg className='jersey' version="1.1" id="Layer_1" viewBox="0 0 496.2 496.2" xmlns="http://www.w3.org/2000/svg">

            {/* <!-- left trim --> */}
            {/* <path style={{ fill: '#487206' }} d="M146.9,215.7c-0.5,1.5-2.1,2.3-3.5,1.8l-45-14.5c-1.5-0.5-2.3-2.1-1.8-3.5l1.9-6.2l50.3,16.2 L146.9,215.7z" /> */}
            <path style={{ fill: getColor('trim') }} d="M146.9,215.7c-0.5,1.5-2.1,2.3-3.5,1.8l-45-14.5c-1.5-0.5-2.3-2.1-1.8-3.5l1.9-6.2l50.3,16.2 L146.9,215.7z" />

            {/* <!-- bottom trim --> */}
            <path style={{ fill: getColor('trim') }} d="M155.8,405l-1.5,10.5c0,0,32.5,13.2,93.4,13.2s94.1-13.2,94.1-13.2l-1.5-10.5H155.8z" />

            {/* <!-- main body --> */}
            <path style={{ fill: getColor('body') }} d="M386.3,149.1c-5.7-35.1-24.9-39.6-24.9-39.6l-72.1-29.4l-9.8-4.8l-31.1-2.5l-31.7,2.6l-9.8,4.8 l-72.1,29.4c0,0-19.1,4.5-24.9,39.6l-11.4,44.2l50.3,16.2l5.8-19c0,0,21.1,59.4,1.3,214.5c0,0,31.6,13.1,91.9,13.1 s92.6-13.1,92.6-13.1c-19.8-155.1,1.3-214.5,1.3-214.5l5.8,19l50.3-16.2L386.3,149.1z" />

            {/* <!-- inner neck polygon --> */}
            <polygon style={{ fill: getColor('neck') }} points="289.3,90.7 282.5,75.3 248.4,72.8 213.7,75.3 206.9,90.7 238.2,123.2 258,123.2 " />

            {/* <!-- right trim --> */}
            <path style={{ fill: getColor('trim') }} d="M349.3,215.7c0.5,1.5,2.1,2.3,3.5,1.8l45-14.5c1.5-0.5,2.3-2.1,1.8-3.5l-1.9-6.2l-50.3,16.2 L349.3,215.7z" />

            {/* <!-- back next collar --> */}
            <path style={{ fill: getColor('trim') }} d="M285.7,78.6c0,0-14.8-1.9-37.3-1.9s-37.8,1.9-37.8,1.9l6-6.7c0,0,10.8-1.7,31.8-1.7 c21.1,0,31.4,1.7,31.4,1.7L285.7,78.6z" />

            {/* <!-- right nexk collar --> */}
            <path style={{ fill: getColor('trim') }} d="M279.8,71.8c0,0,15.9,12.6,7.6,25.7s-35,34.1-35,34.1l-4-10.3C248.3,121.3,293.8,94.5,279.8,71.8z" />

            {/* <!-- left next collar --> */}
            <path style={{ fill: getColor('trim') }} d="M216.5,71.8c0,0-16,12.6-7.7,25.7s35,34.1,35,34.1l4.5-10.3C248.3,121.3,202.5,94.5,216.5,71.8z" />

            {/* <!-- collar trim --> */}
            <polygon style={{ fill: getColor('trim') }} points="252.4,141 243.7,141 243.7,124.6 248.3,121.3 252.4,121.3 " />
        </svg>
    )
}

export default Jersey