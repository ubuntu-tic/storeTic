import { useState } from 'react'
import Modal from './Modal'
import AddProducto from './AddProducto'

const Modales = () => {

  
  
  const [verFormulario, setVerFormulario] = useState(false)

  return (
    <div className="w-100">
      
      

      <button className='btn btn-success m-2' style={{ position: "fixed", top: "10%", right: "0%" }} onClick={() => setVerFormulario(true)}>Agregar Producto</button>
      
      <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
        <AddProducto />
      </Modal>
    </div>
  )
}

export default Modales