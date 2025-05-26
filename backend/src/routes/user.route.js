import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();


router.use(protectRoute);

router.get('/', getRemmendedUsers);
router.get('/friends', getMyFriends)


export default router;