function Star1(){
    let arr=[]
    for(let i=0; i<30; i++){
        arr.push(<div className="star-1"></div>)
        arr.push(<div className="star-2"></div>)
    }
    return arr
}

function Stars(){
    return(
        <div className="container-notfound container-star">
            {Star1()}
        </div>
    );
}
export default Stars;
