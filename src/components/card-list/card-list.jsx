import React from 'react';
import Card from '../card/card'
import './card-list.styles.css';

const CardList = props => (
 /*  console.log(props) */
    <div className='card-list'>
      {/* ya no es this.state, sino props */}
       {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
          ))}
    </div>
  );

export default CardList;
