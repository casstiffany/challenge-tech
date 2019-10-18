import React from 'react';



class Challenge extends React.Component {


  render(){


    return (

 
    	<form className="centerpage">
      			<div>
  
      					<p>Quelle est votre meilleure adresse e-mail ?</p>
      					<input 
      						className ="six columns" 
      						type="email"
      						name="email" 
      						placeholder = "contact@amoureuxduvoyage.com"
      					/>
                <div className="errorMessage"></div>
                </div>

      			<div id ="q2">
      					<p>Quel est le super nom de votre entreprise ?</p>
      					<input 
      						className ="six columns" 
      						type="text" 
      						name="name"
                   			id="name"
      					/> 

               <div className="errorMessage"></div>
            </div>
      			<div id="q3" >
      					<p>Combien de salariés compte votre entreprise ?</p>
      					<input 
      						className ="six columns" 
      						type="number"
      						name="employee" 
                  			id="employee"
      					/> 
                <div className="errorMessage"></div>
            </div>
      			<div id="q4">
      					<p>Qui est votre prestataire actuel ?</p>
      					<input 
      						className ="six columns" 
      						type="text" 
      						name="competitor"
                  			id="competitor"
      						placeholder = "Nom du prestataire"
      					/>  
                <div className="errorMessage"></div>
      			</div>
        </form>

        )}
      


  
 
}

export default Challenge;