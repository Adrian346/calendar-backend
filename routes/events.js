/* 
    Rutas de Eventos / Events
    hots + /api/events
*/

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const isDate = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

router.use( validarJWT )


router.get('/', getEventos)

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').not().custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').not().custom(isDate),
        validarCampos
    ],
    crearEvento)

router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').not().custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').not().custom(isDate),
        validarCampos
    ],
    actualizarEvento)

router.delete('/:id', eliminarEvento)


module.exports = router

