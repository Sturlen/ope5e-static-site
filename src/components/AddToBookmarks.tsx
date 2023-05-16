import { useState } from "react"

export default function AddToBookmarks({ slug }: { slug: string }) {
    const [starred, setStarred] = useState(
        localStorage.getItem(`monster-${slug}`) === "true"
    )
    const onClick = () => {
        setStarred(starred ? false : true)
        localStorage.setItem(`monster-${slug}`, starred ? "false" : "true")
    }
    return (
        <button onClick={onClick} style={{ appearance: "none" }}>
            {starred ? "⭐Bookmarked" : "🔖"}
        </button>
    )
}
