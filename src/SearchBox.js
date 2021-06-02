import React, {Component} from 'react';



class SearchBox extends Component{
    render(searchChange){
        return(
            <div className="pa2">
                <input className='pa3 ba b--green by-lightest-blue' type="search" placeholder="Search Robots" />
            </div>
        );
    }
}

export default SearchBox;