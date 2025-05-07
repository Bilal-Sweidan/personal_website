import { useLocation, Link } from "react-router-dom";
// icons
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";

export default function PathTrackHeader() {
    const fullLocation = useLocation().pathname.split('/').slice(2)
    const location = useLocation().pathname.split('/').slice(2)
    return (
        <div className='text-light fs-5 py-1 d-flex align-items-center'>
            <Link to='/admin' className="text-capitalize text-decoration-none center" style={{ color: "rgb(121, 97, 245)" }}><BiHomeAlt /> </Link>
            <RiArrowRightDoubleLine className=" mx-2" />
            {
                location?.map((currentLocation, index) => (
                    <div className="d-flex align-items-center" style={{ fontFamily: "ProtestGuerrilla-Regular" }}>
                        <Link to={fullLocation.slice(0, index + 1).join('/')} className="text-capitalize text-decoration-none center" style={{ color: "rgb(121, 97, 245)", fontSize : "18px" }}>{currentLocation.split("-").join(' ')} </Link>
                        {
                            index == location.length - 1 ? "" : <RiArrowRightDoubleLine className="mt-1 mx-2" />
                        }
                    </div>
                ))
            }
        </div>
    )
}