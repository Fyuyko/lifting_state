import GrandChild from './GrandChild';

import './child.css';

const Child = ({ name }) => {
   return (
      <div className="child">
         <h5 className='child__header'>Дочерний компонент</h5>
         <GrandChild name={name}/>         
      </div>
   )
}

export default Child;