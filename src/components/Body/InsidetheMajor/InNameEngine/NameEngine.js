import React from 'react';
import { section } from 'reactstrap';

import Names from "./Names";
import InputBox from "../InputBox";
import Shortlists from "../Shortlists";
import Totems from "../TotemEngine/Totems";


import datalist from "../datalist";
// import ShortlistedDcard from '../ShortlistedDcard';
// import ViewWindow from '../ViewWindow';


class NameEngine extends React.Component{

        constructor(props)
        {super(props);
        this.state = {
            filtered: datalist.filter(name => name.erinnya.includes('')),
            favorites : [],
        }}
        addkeys=(keys)=>{
            this.setState( { filtered: datalist.filter( name => name.erinnya.includes(keys)) } );
            };  
        addfavorites=id=>
      { const arrFav = this.state.favorites;
        const favList = arrFav.concat([id]);
        this.setState( { favorites : favList } )

    const Dcarditem = arrFav.filter(id => id.id.includes(arrFav.length));
    return console.log(Dcarditem);
         }


    render(){

return(   
<section className="names-widget">
<InputBox  addkeys={this.addkeys} />
<Totems filtered={ this.state.filtered }/>
<span className="flexa name-body"><div className="col-lg-5 border">
{ /*this is wehre the card goes*/}


{/*<ShortlistedDcard favorites={ this.state.favorites } filtered={ this.state.filtered }/>
*/}


</div>
  
<div className="col-lg-7 ">
<div className="shortlists" placeholder="click an item to view details">
<Shortlists favorites={ this.state.favorites } filtered={ this.state.filtered } />
</div>

<Names filtered={ this.state.filtered } addfavorites={ this.addfavorites.bind(this) } /></div>
</span>
</section>
);
}
}
export default NameEngine;

 