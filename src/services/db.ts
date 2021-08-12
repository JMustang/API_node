const DATABASE_FILE = process.env.DATABASE_FILE;
if (!DATABASE_FILE) throw new Error("No DATABASE_FILE environment variable");

export const openConnection = () => {};
