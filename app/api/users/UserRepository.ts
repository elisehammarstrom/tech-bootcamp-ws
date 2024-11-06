import {prisma} from "@/prisma/prismaClient";
import {UserEntity} from "@prisma/client";

class UserRepository {
    /**
     * Retrieve a user by their ID.
     * @param id - The ID of the user to retrieve.
     * @returns The user object or null if not found.
     */
    async findUserById(id: string): Promise<UserEntity | null> {
        try {
            return await prisma.userEntity.findUnique({
                where: {id},
            });
        } catch (error) {
            console.error("User not found:", error);
            throw error; // Re-throw the error so it can be handled by the calling function
        }
    }
}

export const userRepository = new UserRepository();
