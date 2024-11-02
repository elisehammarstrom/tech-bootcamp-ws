import { db } from '../../config/db';
import { User } from "@/app/types/Database";


export async function findPersonById(id: string): Promise<User | null> {
    console.log("trying to find person");
    const result = await db.selectFrom('users')
        .where('users.id', '=', id)
        .selectAll()
        .executeTakeFirst();
    if (result) {
        return result as User;
    }
    return null; // Return null instead of undefined
}
