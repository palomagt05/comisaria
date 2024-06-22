//importamos el Modelo
import ComiModel from "../models/ComiModel.js";

//** Metodos para el CRUD **/

//Mostrar todos los registros
export const getAllComisaria = async (req, res)=> {
    try {
        const comisarias = await ComiModel.findAll()
        res.json(comisarias)
    } catch (error) {
        res.json({message: error.message})
    }

}

//Mostrar un registro

export const getComisaria = async (req, res)=>{
    try {
        const comisaria = await ComiModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(comisaria)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Crear un registro
export const createComi = async (req, res) =>{
    try {
       await ComiModel.create(req.body)
       res.json({
        "message": "¡Registro creado correctamente!"

       })

    } catch (error) {
        res.json({message: error.message})
    }

}

//Actualizar un registro

export const updateComi = async (req, res)=>{
    try {
        await ComiModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un registro 
export const delateComi = async (req, res)=>{
    try {
        await ComiModel.destroy({
            where: { id : req.params.id}
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}