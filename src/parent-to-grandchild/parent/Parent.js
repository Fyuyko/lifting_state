import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Child from '../child/Child';

import './parent.css';

const Parent = () => {
   const [name, setName] = useState('');

   const handleNameChange = (event) => {
      setName(event.target.value);
   };

   return (
      <div className="parent">
         <h5 className='parent__header'>Родительский компонент</h5>
         <div className='parent__form'>
            <Form>
               <Form.Group>
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                     type="text"
                     placeholder="Начните вводить..."
                     onChange={handleNameChange}
                  />
               </Form.Group>
            </Form>
         </div>      
         <Child name={name}/>
      </div>
   )
}

export default Parent;