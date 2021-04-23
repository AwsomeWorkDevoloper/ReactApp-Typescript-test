import React, {FC} from 'react';
import { Movie } from './Movie';

const MovieBox:FC<Movie> = (props)=>{
    const clearWatched = ()=>{
        localStorage.setItem(
            'watched',
            '[]'
        );

        window.location.reload();
    };

    const setWatched = ()=>{
        var oldList:string[] = JSON.parse(localStorage.getItem('watched') || '[]');
        var newList:string[] = (()=>{
            oldList[oldList.length] = props.name;

            return oldList;
        })();

        localStorage.setItem(
            'watched',
            JSON.stringify(newList)
        );

        window.location.reload();
    };

    if (props.date.toDateString() === "Fri Feb 03 1111"){
        return (
            <div className="movie">
                <h1>Wait a minute...</h1>
                <h2>{props.name}</h2>
                <h3>🎉 YAY!</h3>
                <button onClick={()=>clearWatched()}>Clear Watched List</button>
            </div>
        );
    }

    return (
        <div className="movie">
            <h1>Watch this Movie:</h1>
            <h2>{props.name}</h2>
            <h3>Released on {props.date.toDateString()}</h3>
            <button onClick={()=>setWatched()}>Set as Watched</button>
        </div>
    );
}

export default MovieBox;