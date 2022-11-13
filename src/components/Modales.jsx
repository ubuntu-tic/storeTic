import { useState } from 'react'
import Modal from './Modal'
import AddProducto from './AddProducto'

const Modales = ({addFunction,verFormulario,setVerFormulario,datos,setDatos}) => {

  
  

  return (
    <div className="w-100">
      
      

      <button className='btn btn-success m-2' style={{ position: "fixed", top: "8%", right: "0%" }} onClick={() => setVerFormulario(true)}>Agregar Producto ➕</button>
      
      <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
        <AddProducto addFunction={addFunction} setVerFormulario={setVerFormulario} datos={datos} setDatos={setDatos} />
      </Modal>
    </div>
  )
}

export default Modales