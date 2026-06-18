export function Statistics() {
    const totalStickers = 980
    const completedStickers = 0
    const incompleteStickers = 0

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <article className="bg-white p-4 rounded-md w-90">
                Total: {totalStickers}
            </article>
            <article className="bg-white p-4 rounded-md w-90">
                Completed: {completedStickers}
            </article>
            <article className="bg-white p-4 rounded-md w-90">
                Incomplete: {incompleteStickers}
            </article>
        </main>
    )
}