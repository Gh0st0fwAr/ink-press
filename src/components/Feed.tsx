'use client'

import { useState } from 'react';
import { Card } from './Card';
import type { Post } from '@/data/types';

type FeedProps = {
    posts: Post[];
}

export function Feed({ posts } : FeedProps) {

    const [searchInput, setSearchInput] = useState('');
    const [searchTag, setSearchTag] = useState('all');
    let rawTagsList: string[] = [];
    posts.map((post) => post.status === 'published' ? rawTagsList.push(...post.tags) : '');
    const tagsList = [...new Set(rawTagsList)];

    const filteredPosts = posts.filter((post) => {
        const matchTitle = post.title.toLowerCase().trim().includes(searchInput.toLowerCase().trim());
        const matchExcerpt = post.excerpt.toLowerCase().trim().includes(searchInput.toLowerCase().trim());
        const matchTags = searchTag === 'all' ? true : post.tags.includes(searchTag);
        return (matchTitle || matchExcerpt) && matchTags;
    })
    
    if (posts.length === 0) {
        return (
            <div className="posts__empty">
                <h1 className="empty__title">No posts yet</h1>
                <p className="empty__desc">Please wait for the posts to be added</p>
            </div>
        )
    }

    if (filteredPosts.length === 0) {
        return (
            <div className="posts__empty">
                <h1 className="empty__title">No posts found</h1>
                <p className="empty__desc">Try different search terms</p>
                <button className="empty__button" onClick={() => setSearchInput('')}>Clear filters</button>
            </div>
        )
    }


    return (
        <div className="posts" aria-label="Лента постов">
            <div className="posts__filters">
                <div className="posts__textsearch">
                    <input className="posts__input" type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                </div>
                <div className="posts__tagsearch">
                    <select className="posts__select" value={searchTag} onChange={(e) => setSearchTag(e.target.value)}>
                        <option value="all">all</option>
                        {tagsList.map((tag: string) => (
                            <option value={tag} key={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="posts__grid">
                {filteredPosts.filter((post) => post.status === 'published')
                .map((post) => (
                    <Card data={post} key={post.id} />
                ))}
            </div>
            {/* {posts
                .filter((post) => post.status === 'published')
                .map((post) => (
                <Card data={post} key={post.id} />
                ))} */}
        </div>
    )
}