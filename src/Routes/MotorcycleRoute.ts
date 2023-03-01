import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorycleController';

const router = Router();

router.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

router.get('/', (req, res, next) => new MotorcycleController(req, res, next).find());

router.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).findOne());

router.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());

export default router;