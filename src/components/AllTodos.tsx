import ActiveTodos from './ActiveTodos';
import CompletedTodos from './CompletedTodos';

function AllTodos(props: any) {
  
  return (
    <div>
      <ActiveTodos/>
      <CompletedTodos/>
    </div>
  );
}

export default AllTodos;
