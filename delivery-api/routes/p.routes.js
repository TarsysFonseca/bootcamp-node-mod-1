import express from 'express';
import pController from '../controllers/p.controller.js'

const router = express();

router.post('/total-clientes', pController.totalCliente);

export default router;