import React from 'react';

const Row = ({guess, currentGuess}) => {
    if(guess) {
        return(
            <div className="row past">
                {guess.map((letter, i) => (
                    <div key={i} className={letter.color}>{letter.key}</div>
                ))}
            </div>
        );
    }

    if(currentGuess) {
        // turn currentGuess(string) into an array
        let letters = currentGuess.split('');
        return(
            <div className="row current">
                {letters.map((letter, i) => (
                    <div key={i} className="filled">{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        );
    }

    return(
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Row;
