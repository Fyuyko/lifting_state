import { useState } from 'react';
import ChildOne from '../child/ChildOne';
import ChildTwo from '../child/ChildTwo';
import './parent.css';

const Parent = () => {
   const [name, setName] = useState('');

   const handleChange = (value) => {
      setName(value);
   };

   return (
      <div className="parent">
         <h5 className='parent__header'>Родительский компонент</h5>
         

         <ChildOne onChange={handleChange} />
         <ChildTwo name={name}/>
      </div>
   )
}

export default Parent;