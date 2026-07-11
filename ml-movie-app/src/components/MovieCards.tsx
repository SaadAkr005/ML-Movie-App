function MovieCards() {
    return (
        <div className="grid grid-cols-5 gap-4 p-4 overflow-hidden">
            <div className="hover:scale-105 transition duration-400">
                <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" className="rounded-md"></img>
                <p className="text-white">The Dark Knight</p>
            </div> 
        </div>
    )
}

export default MovieCards 