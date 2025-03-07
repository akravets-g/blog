import { addComment } from '../../lib/comment';

export async function post({request}) {
    const comment = request.formData.get('comment')
    await addComment({text:comment});
    return new Response('ok', { status: 200 });
}
