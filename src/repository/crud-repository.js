class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async getAll() {
        try {
            return await this.model.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = CrudRepository;
