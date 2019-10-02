import React, { Component } from 'react'
import './Pokecard.css'

const pokeAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padId = (currentId) => {
    const stringId = currentId.toString().padStart(3, "0")
    return stringId
}

class Pokecard extends Component {
    render() {
        let imgSrc = `${pokeAPI}${padId(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export { Pokecard }