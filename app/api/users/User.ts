import { UserDto } from "@/app/types/UserDto";
import { UserEntity} from "@prisma/client";

export class User {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    static from(userEntity: UserEntity): User {
        return new User(userEntity.id);
    }

    public toDto(): UserDto {
        return { id: this.id}
    }
}
