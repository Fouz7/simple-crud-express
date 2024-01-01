import VideoGame from "../models/VideoGame.js";
import Platform from "../models/Platform.js";

export default class VGLSequlizeService {
    async getAllVideoGames() {
        return await VideoGame.findAll({ include: Platform });
    };

    async getVideoGameById(id) {
        return await VideoGame.findByPk(id, { include: Platform });
    };

    async createVideoGame(videogame, platforms) {
        const newVideoGame = await VideoGame.create(videogame);
        await newVideoGame.addPlatforms(platforms);
        return this.getVideoGameById(newVideoGame.id);
    };

    async updateVideoGame(id, videogame, platforms) {
        const game = await this.getVideoGameById(id);
        await game.update(videogame);
        await game.setPlatforms(platforms);
        return this.getVideoGameById(id);
    };

    async deleteVideoGame(id) {
        const game = await this.getVideoGameById(id);
        await game.removePlatforms(await game.getPlatforms());
        await game.destroy();
        return { success: true };
    };
}