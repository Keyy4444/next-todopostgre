"use server"

import prisma from '../../../db/prisma'
import { revalidatePath } from 'next/cache';

export const updateRow = async (newRow: string, id: number) => {

    await prisma.list.update({
        where: {
            id: id,
        },
        data: {
            content: newRow,
        },
    })
    revalidatePath("/todos");
}