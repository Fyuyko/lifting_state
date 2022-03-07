import { useState } from 'react';
import Child from '../child/Child';
import './parent.css';

const Parent = () => {
   const [name, setName] = useState('');

   const handleChange = (value) => {
      setName(value);
   };

   return (
      <div className="parent">
         <h5 className='parent__header'>Родительский компонент</h5>
         <p>Ваше имя: {name ? name : 'вы ничего не ввели'}</p>

         <Child onChange={handleChange} />
      </div>
   )
}

export default Parent;