export function GroupHeader({ text }: { text: string }) {
    return (
        <header className="mb-4">
            <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-3">
                {text}
            </h2>
        </header>
    )
}