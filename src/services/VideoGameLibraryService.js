import videogamelibrary from "../database/VGLibraryPool.js";

export default class VideoGameLibraryService {
    async getAllVideoGames() {
        const [rows] = await videogamelibrary.query(`
            SELECT videogames.*, GROUP_CONCAT(platforms.name) as platforms
            FROM videogames
            LEFT JOIN game_platforms ON videogames.id = game_platforms.game_id
            LEFT JOIN platforms ON game_platforms.platform_id = platforms.id
            GROUP BY videogames.id
        `);
        return rows;
    }

    async getVideoGameById(id) {
        const [rows] = await videogamelibrary.query(`
            SELECT videogames.*, GROUP_CONCAT(platforms.name) as platforms
            FROM videogames
            LEFT JOIN game_platforms ON videogames.id = game_platforms.game_id
            LEFT JOIN platforms ON game_platforms.platform_id = platforms.id
            WHERE videogames.id = ?
            GROUP BY videogames.id
        `, [id]);
        return rows[0];
    }

    async createVideoGame(videogame, platforms) {
        const [result] = await videogamelibrary.query('INSERT INTO videogames SET ?', videogame);
        for (let platform of platforms) {
            await videogamelibrary.query('INSERT INTO game_platforms SET ?', { game_id: result.insertId, platform_id: platform });
        }
        return this.getVideoGameById(result.insertId);
    }

    async updateVideoGame(id, videogame, platforms) {
        await videogamelibrary.query('UPDATE videogames SET ? WHERE id = ?', [videogame, id]);
        await videogamelibrary.query('DELETE FROM game_platforms WHERE game_id = ?', [id]);
        for (let platform of platforms) {
            await videogamelibrary.query('INSERT INTO game_platforms SET ?', { game_id: id, platform_id: platform });
        }
        return this.getVideoGameById(id);
    }

    async deleteVideoGame(id) {
        await videogamelibrary.query('DELETE FROM game_platforms WHERE game_id = ?', [id]);
        await videogamelibrary.query('DELETE FROM videogames WHERE id = ?', [id]);
        return { success: true };
    }
}