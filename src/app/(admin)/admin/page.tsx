import { PostsTable } from "../components/PostsTable";
import { mockData } from "@/data/mock";

export default function AdminPage() {
    return (
        <div className="admin__content">
            <PostsTable posts={mockData} />
        </div>
    )
}