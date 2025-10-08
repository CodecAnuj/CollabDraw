import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Public routes (no authentication required)
router.post('/register', register);
router.post('/login', login);

// Protected route example (requires authentication)
router.get('/me', authMiddleware, (req, res) => {
  // req.user is available because of middleware
  res.json({
    message: 'User profile',
    user: req.user
  });
});

export default router;