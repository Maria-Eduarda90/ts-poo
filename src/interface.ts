type DefaultResponse = {
    id: string | number;
    name: string;
    createdAt: string;
};

type InputDTO = { name: string; active: boolean };

interface IRepository {
    readonly model: any;
    findAll(): DefaultResponse[];
    findById(id: string | number): DefaultResponse;
    insert(data: InputDTO): DefaultResponse;
    update(id: string | number, data: InputDTO): DefaultResponse;
    destroy(id: string | number): boolean;
}

class UserRepository implements IRepository {
    model: any;

    constructor(model: any) {
        this.model = model;
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: string | number): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    insert(data: InputDTO): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: string | number, data: InputDTO): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: string | number): boolean {
        throw new Error("Method not implemented.");
    }
}
