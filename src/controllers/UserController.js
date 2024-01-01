import UserService from "../services/UserService.js";

export default class UserController {
    constructor() {
        this.userService = new UserService();
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async register(req, res) {
        const { username, password } = req.body;
        const response = await this.userService.register(username, password);
        res.status(response.status).send(response.message);
    }

    async login(req, res) {
        const { username, password } = req.body;
        const response = await this.userService.login(username, password);
        res.status(response.status).send(response.message);
    }
}