let Movie =() => {
    let movie_name = "Avatar 2"
    let rel_Date = 'Dec16'
    let more_Details = {
        dir_Name: 'James Cameran',
        "actor": "Dont know",
        "actress": "Nayana"
    }
    return <div>
        <h1>{movie_name}</h1>
        <h2>Release Date: {rel_Date-Date}</h2>
        <h3>Dir Name:{more_Details.dir_Name}</h3>
        <h3>Actor:{more_Details.actor}</h3>
        <h3>Actress:{more_Details.actress}</h3>
    </div>
}
export default Movie
    