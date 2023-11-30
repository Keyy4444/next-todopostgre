"use server"

import prisma from '../app/lib/prisma'
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

export const deleteRow = async (deleteRow: string, deleteId: number) => {

    await prisma.list.delete({
        where: {
            id: deleteId,
            content: deleteRow,
        }
    })
    revalidatePath("/todos");
} 

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