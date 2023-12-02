"use server"

import prisma from '../../../db/prisma'
import { revalidatePath } from 'next/cache';

export const deleteRow = async (deleteRow: string, deleteId: number) => {

    await prisma.list.delete({
        where: {
            id: deleteId,
            content: deleteRow,
        }
    })
    revalidatePath("/todos");
} 