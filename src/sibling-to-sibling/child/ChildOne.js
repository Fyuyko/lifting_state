import Form from 'react-bootstrap/Form';
import './child.css';

const ChildOne = ({ onChange }) => {
   const handleNameChange = (event) => {
      onChange(event.target.value);
   };

   return (
      <div className="child child__one">
         <h5 className='child__header'>Дочерний компонент</h5>
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
   )
}

export default ChildOne;