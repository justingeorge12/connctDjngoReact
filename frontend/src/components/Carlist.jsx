
function Carlist(props) {

    return(
        <div>
            <div className="m-4 p-4 bg-gray-800 border text-slate-400 border-black">
                <p>Car name: {props.data.carName}</p>
                <p>Release year: {props.data.release_year}</p>
            </div>
        </div>
    )
}

export default Carlist