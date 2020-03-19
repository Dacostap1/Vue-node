import express from 'express';
const router = express.Router();

//importar el modelo
import Nota from '../models/nota';

//Agregar una nota
router.post('/nueva-nota', async(req, res)=>{

    const body = req.body;

    try {
        const notaBD = await Nota.create(body);
        res.status(200).json(notaBD);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }

});

//get -- show one
router.get('/nota/:id', async(req, res) => {

    const _id = req.params.id;

    try {
        const notaBD = await Nota.findOne({_id})
        res.status(200).json(notaBD); //es 200 por defecto
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//get -- show all
router.get('/notas', async(req, res) => {

    try {
        const notaBD = await Nota.find();
        res.json(notaBD); //es 200 por defecto
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })  
    }
});

//Exportando router
module.exports = router;