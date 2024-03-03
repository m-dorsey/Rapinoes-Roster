
import pitch_img from '../assets/images/pitch.png'
import Formation from './Formation'
import '../assets/styles/Pitch.css'
import Player from './Players'
import {useLocation} from 'react-router-dom'

export const Pitch = () => {

    // const location = useLocation()
    // console.log(location)

    const formation = [
        ["SUB", 4],
        ["GK", 1],
        ["DEF", 4],
        ["MID", 4],
        ["FWD", 2],
    ]

    return (
        <div className='pitch'>
            <Formation className='pitch_formation' formation={formation}>
            </Formation>
        </div>
    )
}

export default Pitch