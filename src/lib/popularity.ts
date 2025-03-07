import fs from 'fs';
const popularityPath = 'src/data/popularity.json';
const readFile = async (path) => {
    const data = await fs.promises.readFile(path, 'utf-8');
    return JSON.parse(data);
}
const writeFile = async (path, data) => {
    await fs.promises.writeFile(path, JSON.stringify(data), 'utf-8');
}
export function getPopularity() {
    return readFile(popularityPath)
}

export function addPopularity(post) {
    const popularity = await readFile(popularityPath);
    const currentPost = popularity.popularity.find(p => p.post === post)
    if(currentPost){
        currentPost.count++
    }else {
        popularity.popularity.push({post, count: 1});
    }
    await writeFile(popularityPath, popularity);
    return 'ok';
}

