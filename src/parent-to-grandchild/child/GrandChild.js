import './child.css';

const GrandChild = ({ name }) => {
   return (
      <div className="child grand__child">
         <h5 className='child__header'>Внучатый компонент</h5>
         <p>Ваше имя: {name ? name : 'вы ничего не ввели'}</p> 
      </div>
   )
}

export default GrandChild;