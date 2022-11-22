import Modal from "./Modal";
import AddProducto from "./AddProducto";

const Modales = ({
  addFunction,
  verFormulario,
  setVerFormulario,
  datos,
  setDatos,
  tipo,
  updateFunction,
}) => {
  return (
    <div className="w-100">
      <button
        className="btn btn-success m-2"
        style={{ position: "absolute", top: "8%", right: "0%" }}
        onClick={() => setVerFormulario(true)}
      >
        Agregar Producto ➕
      </button>

      <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
        <AddProducto
          addFunction={addFunction}
          setVerFormulario={setVerFormulario}
          datos={datos}
          setDatos={setDatos}
          tipo={tipo}
          updateFunction={updateFunction}
        />
      </Modal>
    </div>
  );
};

export default Modales;
