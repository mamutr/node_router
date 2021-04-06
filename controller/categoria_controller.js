
const data = [
    {
        id: 123,
        nombre: "Polos",

    },{
        id: 124,
        nombre: "Pantalones",

    }
];

/* Listar categorías */
function listar(req,res) {
    res.json({
        data : data
    })
};

/* Conseguir Categoría por Id */
function conseguirCategoria(req,res) {
    let id = req.params.id
    res.json({
        id: id,
        nombre: "Prueba",
        message: "Categoría según Id"
    })
};

/* Guardar categoría */
function guardar(req,res) {
    res.json(
        {
            message: "Categoría Guardada"
        }
    )
};

/* Borrar categoría */
function borrar(req,res) {
    let id = req.params.id;
    res.json(
        {
            message: `Categoría ${id} Eliminada`
        }
    )
};

/* Actualizar categoría */
function actualizar(req,res){
    let id = req.params.id;
    res.json(
        {
            message : `Categoría ${id} Actualizada`
        }
    )
};

module.exports = {
    listar,
    conseguirCategoria,
    guardar,
    borrar,
    actualizar
};