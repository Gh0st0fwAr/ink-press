
export type Post = {
    id: string,
    title: string,
    slug: string,
    excerpt: string,
    body: string,
    tags: string[],
    status: 'draft' | 'published',
    createdAt: string,
    updatedAt?: string,
}