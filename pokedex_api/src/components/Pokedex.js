import React from "react";

class Pokedex extends React.Component {
    render() {
        const { allPokes } = this.props;

        return (
            <>
                {allPokes.map((poke) => {
                    return <div className="preview-pokemon" key={poke.name}>
                        <div className="preview-up">
                            <img className="poke-img" src={poke.image} />
                        </div>
                        <div className="preview-down">
                            <p>Pokemon: {poke.name}</p>
                            <p>Type: {poke.type}</p>
                        </div>
                    </div>
                })}
            </>
        );
    }

}

export default Pokedex;