import React from 'react';
import { Formik } from 'formik';
import { HashLink as Link } from 'react-router-hash-link';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Veuillez saisir une adresse e-mail valide")
    .min(4,"L'adresse e-mail doit contenir minimum 4 caractères")
    .required("Veuillez saisir une adresse e-mail valide"),
  name: Yup.string()
    .min(4,"Le nom de votre entreprise doit contenir minimum 4 caractères")
    .required("Veuillez saisir le nom de votre entreprise"),
  employee: Yup.number()
    .min(1000,"Le nombre d'employé doit être supérieur à 1000")
    .required("Veuillez saisir le nombre d'employé de votre entreprise"),
  competitor: Yup.string()
    .min(4,"Le nom de votre prestataire actuel doit contenir minimum 4 caractères")
    .required("Veuillez saisir le nom de votre prestataire actuel"),
});


class Challenge extends React.Component {


onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  render(){


    return (

     <Formik 
      initialValues = {{email: "" , name: "", employee: "", competitor: ""}}
      validationSchema = {validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur,}) => (
 
    	<form onKeyPress={this.onKeyPress}>
      			<div className="centerpage">
  
      					<p>Quelle est votre meilleure adresse e-mail ?</p>
      					<input 
      						className ="six columns" 
      						type="email"
      						name="email" 
      						placeholder = "contact@amoureuxduvoyage.com"
      						value = {values.email}
      						onChange={handleChange}
                            onBlur={handleBlur}
      					/>
                <div className="errorMessage">{errors.email && touched.email && errors.email}</div>
                { values.email.length >= 4 &&
                  <Link to="/challenge#q2"><button>Valider</button></Link>
                }
                </div>

      			<div id ="q2" className="centerpage">
      					<p>Quel est le super nom de votre entreprise ?</p>
      					<input 
      						className ="six columns" 
      						type="text" 
      						name="name"
                   			id="name"
                   			value = {values.name}
      						onChange={handleChange}
							onBlur={handleBlur}
      					/> 

               <div className="errorMessage">{errors.name && touched.name && errors.name}</div>
               { values.name.length >= 4 &&
               <Link to="/challenge#q3"><button id="button-2">Valider</button></Link>
      		   }
            </div>
      			<div id="q3" className="centerpage">
      					<p>Combien de salariés compte votre entreprise ?</p>
      					<input 
      						className ="six columns" 
      						type="number"
      						name="employee" 
                  			id="employee"
                  			value = {values.employee}
      						onChange={handleChange}
							onBlur={handleBlur}
      					/> 
                <div className="errorMessage">{errors.employee && touched.employee && errors.employee}</div>
            	{ values.employee >= 1000 &&
                 <Link to="/challenge#q4"><button id="button-3">Valider</button></Link>
      			}
            </div>
      			<div id="q4" className="centerpage">
      					<p>Qui est votre prestataire actuel ?</p>
      					<input 
      						className ="six columns" 
      						type="text" 
      						name="competitor"
                  			id="competitor"
      						placeholder = "Nom du prestataire"
      						value = {values.competitor}
      						onChange={handleChange}
							onBlur={handleBlur}
      					/>  
                <div className="errorMessage">{errors.competitor && touched.competitor && errors.competitor}</div>
      			</div>
        </form>

        )}

    </Formik>  

	);

  }
 
  
 
}

export default Challenge;