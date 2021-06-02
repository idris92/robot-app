import React, {Component} from 'react';
import Card from "./Card";


class CardList extends Component{
    render(props){
        const { robots }= this.props;
        const cardComponent = robots.map((user,i)=>{
            return (
              <Card
                key={robots[i].username}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
        });
        return(
            <div>
                
                {cardComponent}
            </div>
        );
    }
}

export default CardList;