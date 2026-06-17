function Header() {
    return(
        <header>
            <div className="flex flex-col items-center justify-center">
                <h1 className="py-4 px-4 text-5xl font-bold text-red-500">
                    ML Movie App
                </h1>
                <p className="py-4 px-4">
                    This is intended to be a full stack application using React, Typescript, Tailwind, FastAPI, SQL, Python. I will use it as a way to become comfortable and familiar with all stages of developing a machine learning project. Including training, development and integration into a useful application. 
                </p>
            </div>
        </header>
    )
}

export default Header