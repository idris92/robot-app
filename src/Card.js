import React, {Component} from 'react';


class Card extends Component{
  render(props){
    const { id, name, email } = this.props;
        return (
          <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow5">
                <img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>  
          </div>
        );
        
    }
}

export default Card;