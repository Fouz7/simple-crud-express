import VideoGameLibraryService from '../services/VideoGameLibraryService.js';
// import VGLSequlizeService from '../services/VGLSequlizeService.js';

export default class VideoGameLibraryController {
    constructor() {
        this.videoGameLibraryService = new VideoGameLibraryService();
        // this.videoGameLibraryService = new VGLSequlizeService();
        this.getAllVideoGames = this.getAllVideoGames.bind(this);
        this.getVideoGameById = this.getVideoGameById.bind(this);
        this.createVideoGame = this.createVideoGame.bind(this);
        this.updateVideoGame = this.updateVideoGame.bind(this);
        this.deleteVideogame = this.deleteVideoGame.bind(this);
    }

    async getAllVideoGames(req, res) {
        const videogames = await this.videoGameLibraryService.getAllVideoGames();
        res.json(videogames);
    }

    // async getAllVideoGamesSqlz(req, res) {
    //     const videogames = await this.VGLSequlizeService.getAllVideoGames();
    //     res.json(videogames);
    // }

    async getVideoGameById(req, res) {
        const videogame = await this.videoGameLibraryService.getVideoGameById(req.params.id);
        res.json(videogame);
    }

    // async getVideoGameByIdSqlz(req, res) {
    //     const videogame = await this.VGLSequlizeService.getVideoGameById(req.params.id);
    //     res.json(videogame);
    // }

    async createVideoGame(req, res) {
        const videogame = await this.videoGameLibraryService.createVideoGame(req.body.videogame, req.body.platforms);
        res.status(201).json(videogame);
    }

    // async createVideoGameSqlz(req, res) {
    //     const videogame = await this.VGLSequlizeService.createVideoGame(req.body.videogame, req.body.platforms);
    //     res.status(201).json(videogame);
    // }

    async updateVideoGame(req, res) {
        await this.videoGameLibraryService.updateVideoGame(req.params.id, req.body.videogame, req.body.platforms);
        res.json({ success: "Video Game updated" });
    }

    // async updateVideoGameSqlz(req, res) {
    //     await this.VGLSequlizeService.updateVideoGame(req.params.id, req.body.videogame, req.body.platforms);
    //     res.json({ success: "Video Game updated" });
    // }

    async deleteVideoGame(req, res) {
        await this.videoGameLibraryService.deleteVideoGame(req.params.id);
        res.json({ success: "Video Game deleted" });
    }

    // async deleteVideoGameSqlz(req, res) {
    //     await this.VGLSequlizeService.deleteVideoGame(req.params.id);
    //     res.json({ success: "Video Game deleted" });
    // }

}





