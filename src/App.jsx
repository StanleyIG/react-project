import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvidev } from './context/user.context';

function App() {
  const [items, selectedItem, setItem, setSelectedItem] =
    useLocalStorage('data');

  return (
    <UserContextProvidev>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={items} setItem={setSelectedItem} selectedItem={selectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={setItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvidev>
  );
}

export default App;
