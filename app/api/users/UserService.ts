import {userRepository} from "@/app/api/users/UserRepository";
import {UserDto} from "@/app/types/UserDto";
import {User} from "@/app/api/users/User";

export class UserService {

    async getUser(id: string): Promise<UserDto> {
        const userEntity = await userRepository.findUserById(id);
        if (!userEntity) {
            throw new Error(`User with ID ${id} not found`);
        }
        return User.from(userEntity).toDto();
    }

}

// Instantiate and export an instance of MovieService
export const userService: UserService = new UserService();
