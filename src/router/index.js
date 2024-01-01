import express from 'express';
import UserController from '../controllers/UserController.js';
import VideoGameLibraryController from '../controllers/VideoGameLibraryController.js';

const router = express.Router();
const userController = new UserController();
const videoGameLibraryController = new VideoGameLibraryController();

//User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

//Video Game Library routes
router.get('/videogames', videoGameLibraryController.getAllVideoGames);
router.get('/videogames/:id', videoGameLibraryController.getVideoGameById);
router.post('/videogames', videoGameLibraryController.createVideoGame);
router.put('/videogames/:id', videoGameLibraryController.updateVideoGame);
router.delete('/videogames/:id', videoGameLibraryController.deleteVideoGame);

// //Video Game Library with Sequelize routes
// router.get('/videogames/sqlz', videoGameLibraryController.getAllVideoGamesSqlz);
// router.get('/videogames/sqlz/:id', videoGameLibraryController.getVideoGameByIdSqlz);
// router.post('/videogames/sqlz', videoGameLibraryController.createVideoGameSqlz);
// router.put('/videogames/sqlz/:id', videoGameLibraryController.updateVideoGameSqlz);
// router.delete('/videogames/sqlz/:id', videoGameLibraryController.deleteVideoGameSqlz);


export default router;