import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ( { child } ) => {

    let user = useSelector(state => state.user)

    return ( 
        <section>
            {
                user ? child : <Navigate to='/' replace />
            }
        </section>
     );
}
 
export default Protect;