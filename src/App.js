import ParentToChild from './parent-to-child/ParentToChild';
import ChildToParent from './child-to-parent/ChildToParent';
import SiblingToSibling from './sibling-to-sibling/SiblingToSibling';
import ParentToGrandchild from './parent-to-grandchild/ParentToGrandchild';

import './App.css';

export default function App() {
  return (
    <>
      <div className="app">

        <div className="block">
          <p>Передача состояния от родительского компонента к дочернему</p>
          <ParentToChild />
        </div>

        <div className="block">
          <p>Передача состояния от дочернего компонента к родительскому</p>
          <ChildToParent />
        </div>

        <div className="block">
          <p>Передача состояния от ребенка к ребенку</p>
          <SiblingToSibling />
        </div>

        <div className="block">
          <p>Передача состояния от родительского компонента к внучатому</p>
          <ParentToGrandchild />
        </div>

      </div>
    </>
  )
}
