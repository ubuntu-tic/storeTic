import React, { useState, useEffect } from 'react'


const CrudForm = ({addProducto, editProducto, editData}) => {

    const [form, setForm] = useState({
        id: null,
        urlImagen: '',
        nombre: '',
        descripcion: '',
        caracteristicas: '',
        precio: 0,
        stock: 0
    })

    useEffect(() => {
        if(editData !== null){
            setForm(editData)
        } else {
            setForm({
                id: null,
                urlImagen: '',
                nombre: '',
                descripcion: '',
                caracteristicas: '',
                precio: 0,
                stock: 0
            })
        }
    }, [editData])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.urlImagen !== '' && form.nombre !== '' && form.descripcion !== '' && form.caracteristicas !== '' && form.precio !== '' && form.stock !== ''){
            if(editData !== null){
                editProducto(form)
            } else {
                form.id = Date.now()
                addProducto(form)
                setForm({
                    id: null,
                    urlImagen: '',
                    nombre: '',
                    descripcion: '',
                    caracteristicas: '',
                    precio: 0,
                    stock: 0
                })
            }
        } else {
            alert('Favor completar todos los campos')
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    
  return (
      <>  
          <form className='addPRoducto' onSubmit={handleSubmit}>
          <h1>Agregar Producto</h1>
              <fieldset>
                  <div className="form-group">
                      <label for="urlImagen" className="form-label mt-3">Url Imagen</label>
                      <input type="url" className="form-control" id="urlImagen" aria-describedby="urlImagen" placeholder="Ingresa la url de la Imagen" onChange={handleChange} value={form.urlImagen}/>
                  </div>
                  <div className="form-group">
                      <label for="nombre" className="form-label mt-3">Nombre de Producto</label>
                      <input type="text" className="form-control" id="nombre" placeholder="nombre" onChange={handleChange} value={form.nombre}/>
                  </div>
                  <div className="form-group">
                      <label for="descripcion" className="form-label mt-3">Descripción de Producto</label>
                      <input type="text" className="form-control" id="descripcion" placeholder="descripción" onChange={handleChange} value={form.descripcion}/>
                  </div>
                  <div className="form-group">
                      <label for="caracteristicas" className="form-label mt-3">Caracteristicas de Producto</label>
                      <textarea  type="text" className="form-control" id="caracteristicas" placeholder="caracteristicas" onChange={handleChange} value={form.caracteristicas}/>
                  </div>
                  <div className="form-group">
                      <label for="precio" className="form-label mt-3">Precio de Producto</label>
                      <input type="number" className="form-control" id="precio" placeholder="precio" onChange={handleChange} value={form.precio}/>
                  </div>
                  <div className="form-group">
                      <label for="stock" className="form-label mt-1">stock de Producto</label>
                      <input type="number" className="form-control" id="stock" placeholder="unidades disponibles" onChange={handleChange} value={form.stock}/>
                  </div>
                  <button type="submit" className="btn btn-success">Enviar</button>
                  <button type="reset" className="btn btn-danger">Cancelar</button>
              </fieldset>
          </form>
      </>
  )
}

export default CrudForm