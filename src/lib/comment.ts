import fs from 'fs';
const commentsPath = 'src/data/comments.json';
const readFile = async (path) => {
    const data = await fs.promises.readFile(path, 'utf-8');
    return JSON.parse(data);
}
const writeFile = async (path, data) => {
    await fs.promises.writeFile(path, JSON.stringify(data), 'utf-8');
}
export function getComments() {
    return readFile(commentsPath)
}

export async function addComment(comment) {
    const data = await readFile(commentsPath)
    const comments = data.comments
    comments.push(comment);
    await writeFile(commentsPath, data);
    return 'ok';
}
