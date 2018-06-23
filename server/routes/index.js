import express from 'express';
import userCtrl from '../controllers/users';
import taskRoutes from './tasks';
import userRoutes from './users';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

export default router;  