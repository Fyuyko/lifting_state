import './child.css';

const ChildTwo = ({ name }) => {
   return (
      <div className="child">
         <h5 className='child__header'>Дочерний компонент</h5>
         <p>Ваше имя: {name ? name : 'вы ничего не ввели'}</p>
      </div>
   )
}

export default ChildTwo;