export const WelcomeHeader = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-10">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-xl font-bold tracking-tight text-white mt-0">Welcome</h2>
                <h2 className="text-4xl font-bold tracking-tight text-white">Appmint Chat</h2>
                <p className="mt-6 text text-gray-300">
                    We're here to help you 24x7
                </p>
                <p className="mt-1 text-sm text-gray-300/80"> Search Our Knowledge Base or Start a Chat</p>
            </div>
        </div>
    )
}
