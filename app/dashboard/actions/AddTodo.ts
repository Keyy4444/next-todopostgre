"use server"

import prisma from '../../../db/prisma'
import { revalidatePath } from 'next/cache';

export const addTodo = async (formData: FormData) => {

    const content = formData.get("content");
    await prisma.list.create({
        data: {
            content: content as string,
            isEdit: false,
            isComplete: false,
        },
    })

    revalidatePath("/todos");
}