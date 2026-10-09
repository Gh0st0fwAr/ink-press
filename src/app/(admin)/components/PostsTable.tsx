
import type { Post } from '@/data/types'

type PostsTableProps = {
    posts: Post[];
}

export function PostsTable( { posts }: PostsTableProps ) {
    return (
        <div className="admin-grid">
            <div className="admin-grid__rows">
                <div className="admin-grid__row">
                    <div className="admin-grid__title">ID</div>
                    <div className="admin-grid__title">Title</div>
                    <div className="admin-grid__title">Slug</div>
                    <div className="admin-grid__title">Tags</div>
                    <div className="admin-grid__title">Status</div>
                    <div className="admin-grid__title">Created At</div>
                    <div className="admin-grid__title">Updated At</div>
                </div>
                {
                    posts.map((post) => (
                        <div className="admin-grid__row" key={post.id}>
                          <div className="admin-grid__cell">{post.id}</div>  
                          <div className="admin-grid__cell">{post.title}</div>
                          <div className="admin-grid__cell">{post.slug}</div>
                          <div className="admin-grid__cell">{post.tags.join(', ')}</div>
                          <div className="admin-grid__cell">{post.status}</div>
                          <div className="admin-grid__cell">{post.createdAt}</div>
                          <div className="admin-grid__cell">{post.updatedAt ? post.updatedAt : 'Never'}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}