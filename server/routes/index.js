import express from 'express';
import userCtrl from '../controllers/users';
import taskRoutes from './tasks';
import userRoutes from './users';
import authRoutes from './auth';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/auth', authRoutes);

export default router;  