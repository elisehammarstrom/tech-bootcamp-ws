import { prisma } from "@/prisma/prismaClient";
import { User } from "@prisma/client";


class UserRepository {
    /**
     * Retrieve a user by their ID.
     * @param id - The ID of the user to retrieve.
     * @returns The user object or null if not found.
     */
    async findUserById(id: string): Promise<User | null> {
        try {
            const user = await prisma.user.findUnique({
                where: { id },
            });
            return user;
        } catch (error) {
            console.error("Error retrieving user by ID:", error);
            throw error; // Re-throw the error so it can be handled by the calling function
        }
    }
}

export const userRepository = new UserRepository();
