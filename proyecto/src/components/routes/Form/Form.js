import './form.css';
import  { getFirestore , addDoc , collection} from 'firebase/firestore';
import {useCartContext} from '../../../context/CartContext'; 
import {useState} from 'react'; 

const Form = () => {

    const [ id, setId ] = useState()
    const [form , setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const  {cart, totalPrice, clearCart } = useCartContext();


    const factura = {
        form,
        items: cart.map(data => ({id:data.id, titulo: data.titulo, precio: data.precio, cantidad:data.cantidad})),
        total: totalPrice()
    }


    const finishClick = (e) => {
        e.preventDefault()
            if(form.name === '' && form.email === '') {
                alert("Todos los campos son requeridos")
                }else{
                const db = getFirestore();
                const userCollection = collection(db, 'compra')
                    addDoc(userCollection, factura)
                    .then(( res ) => {
                    alert('se envio correctamente')
                    setId(res.id)
                    clearCart();
                    })   
                
                }
        }




  // Hago copia del form
        const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]:value})
        }
    
    return (
        <div className='form'>
            <form onSubmit={finishClick}>
                <div className="div-form">
                    <label htmlFor='nombre'>Nombre </label>
                    <input className='input-form' type="text" id="nombre" name='name' onChange={changeHandler} value={form.name}/>
                </div>
                <div className="div-form">
                    <label htmlFor='email'>Email </label>
                    <input className='input-form' type="email" id="email" name='email' onChange={changeHandler} value={form.email}/>
                </div>
                <div className="div-form">
                    <label htmlFor='mensaje'>Telefono </label>
                    <input className='input-form' type="text" id="phone" name='phone' onChange={changeHandler} value={form.phone}/>
                </div>
                <div className='div-btn'>
                <button type='submit' className="btn-form">Enviar</button>
                </div>
            </form>
        </div>
    )
};

export default Form;