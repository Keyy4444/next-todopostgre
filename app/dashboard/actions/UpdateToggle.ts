"use server"

import prisma from '../../../db/prisma'
import { revalidatePath } from 'next/cache';

export const updateToggle = async (id: number, isComplete: boolean) => {
    await prisma.list.update({
        where: {
            id: id,
        },
        data: {
            isComplete: !isComplete,
        }
    })
    revalidatePath("/todos");
}