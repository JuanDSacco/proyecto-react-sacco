import { Link } from "react-router-dom";
import './item.css'

const Item = ({data}) => {
    return (
    
            <div className="contain-card">
                <p className="">{data.titulo}</p>
                <p className="">${data.precio}</p>
                <img src={data.imagen} alt={data.imagen} className=""></img>
                <div className="">
                    <Link to={`/item/${data.id}`} className="">Ver detalle</Link>
                </div>
            </div>
    
    )
};

export default Item;