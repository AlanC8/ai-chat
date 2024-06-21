import { Router } from 'express';
import { roadmapRouter } from './roadmap/roadmap.router';
import userPromptRouter from './roadmap/userprompt.route';
// other routers can be imported here

const globalRouter = Router();

// Use the userRouter for user-related routes
globalRouter.use(roadmapRouter);
globalRouter.use(userPromptRouter)
// other routers can be added here

export default globalRouter;
