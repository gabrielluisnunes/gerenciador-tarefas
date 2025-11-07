"use server";

import  prisma  from "../utils/prisma";

export async function getTasks() {
  const tasks = await prisma.tasks.findMany();
  return tasks;
}
