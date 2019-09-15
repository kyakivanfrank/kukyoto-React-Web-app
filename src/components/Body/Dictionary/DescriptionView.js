import React from 'react';

import DescrViewItem  from './DescrViewItem';

export default ({favoriteWords, filteredWordlist })=> {

 const chosenWord = favoriteWords.map( choiceid => {
   

  const chosenOne = filteredWordlist[choiceid];

  return <DescrViewItem key={chosenOne.id} word={chosenOne.word} 
  english={chosenOne.english} wordType={chosenOne.wordType} 
  description={chosenOne.description} useofWord={chosenOne.useofWord}  relatedWords={chosenOne.relatedWords} /> }
  
  )

  return (
    {chosenWord}
  );
  
  
  }
  