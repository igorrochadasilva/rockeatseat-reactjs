import './styles/global.scss'
import { RepositoryList } from "./components/RepositoryList";
import { Counter } from './components/Counter';

export function App(){
    
    // throw new Error('Eita giovana, o forninho caiu!')
    
    return (
      <>
        <RepositoryList />
        <Counter />
      </>
    );
}