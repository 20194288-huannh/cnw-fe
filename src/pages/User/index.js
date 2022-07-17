import NavUser from "./NavUser";
import DetailUser from "./DetailUser";
import FindShop from '../Home/FindShop'

function User(){
    window.scrollTo(0,0);
    let user = {
        email: "huuhuan@gmail",
        orders: [

        ],
        name : "Huan",
        phoneNumber: "123456789",
        address: "Ha Noi"
    } 
    return (
        <div>
            <NavUser/>
            <DetailUser user={user}/>
            <FindShop/>
        </div>
    )
}

export default User;