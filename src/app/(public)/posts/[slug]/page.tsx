import { mockData } from '@/data/mock';
import Link from 'next/link';

type Props = { params: Promise<{ slug: string }> }

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = mockData.find((post) => post.slug === slug);

    if (!post || post.status === 'draft') {
        return (
            <div>
                <h1>Post not found</h1>
                <Link href="/">Back to home</Link>
            </div>
        )
    }
    return (
        <div className="post-detailed">
            <h1 className="post-detailed__title">{post.title}</h1>
            <div className="post-detailed__timeline">
                <p className="post-detailed__created card__time">Created: {post?.createdAt}</p>
                {post.updatedAt && <p className="post-detailed__updated card__time">Updated: {post.updatedAt}</p>}
            </div>
            <div className="post-detailed__body">
                <p className="post-detailed__body">{post?.body}</p>
            </div>
            <div className="post-detailed__tags">
                {post?.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <div className="post-detailed__footer">
                <Link className="post-detailed__button" href="/">
                    Back to home
                </Link>
            </div>
        </div>
    )
}