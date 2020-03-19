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

//Exportando router
module.exports = router;