function Header() {
    return(
        <header>
            <div className="grid grid-cols-[3fr_1fr_1fr] border-y-4 items-center bg-slate-950">
                <h1 className="text-5xl font-montserrat text-red-500 p-4 pb-6">
                    ML Movie App
                </h1>
                <nav className="flex gap-[2rem] justify-end text-white">
                    <a href="">Home</a>
                    <a href="">My List</a>
                    <a href="">About</a>
                </nav>
                <div className="pl-[4rem]">
                    <input type="search" placeholder="Search..." className="p-[0.5rem] bg-zinc-800 text-white placeholder:text-white"></input>
                </div>
            </div>
        </header>
    )
}

export default Header