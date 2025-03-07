import fs from 'fs';
const commentsPath = 'src/data/comments.json';
const readFile = async (path) => {
    const data = await fs.promises.readFile(path, 'utf-8');
    return JSON.parse(data);
}
const writeFile = async (path, data) => {
    await fs.promises.writeFile(path, JSON.stringify(data), 'utf-8');
}
export async function getComments() {
    return await readFile(commentsPath)
}

export async function addComment(comment) {
    const comments = await readFile(commentsPath);
    comments.comments.push(comment);
    await writeFile(commentsPath, comments);
    return 'ok';
}

