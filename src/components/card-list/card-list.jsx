
import React from 'react'

import './card-list.css'

import Card from '../card/card'


function CardList(props){
        return(
            <div className="card-list">
                {props.monster.map(monster=>(
                <Card key={monster.id} monsters={monster}/> 
             ))}
             </div>
        )
}

export default CardList