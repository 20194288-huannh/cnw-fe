import Product from "../index"

function Dress(){
    var dress = {
        //api
        link: "/dress"
    }
    return (
        <div>
            <Product dress = {dress}/>
        </div>
    )
}

export default Dress;