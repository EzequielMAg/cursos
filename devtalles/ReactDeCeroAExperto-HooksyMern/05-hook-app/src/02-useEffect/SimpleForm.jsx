import { useEffect, useState } from "react";
import { Message2 } from "./Message2";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dev-ezequiel',
        email: 'ezequiel.m.aguilar@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        /* if(name == "username") {
            setFormState({username: value, email  })
        }
        
        if(name == "email") {
            setFormState({username, email: value  })
        } */
        setFormState({ ...formState, [name]: value });
    }

    /* useEffect( () => {
        console.log('useEffect called!');
    }, []);

    useEffect( () => {
        console.log('formState changed!!');
    }, [formState]);
    
    useEffect( () => {
        console.log('email changed!!');
    }, [email]);
 */
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value= { username }
                onChange={ onInputChange }
            />    
            
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value= { email }
                onChange={ onInputChange }
            />

            {
                /* (username == "ezequiel-dev") && <Message /> */
                (username == "ezequiel-dev") && <Message2 />
            }
        </>
    )   
}
