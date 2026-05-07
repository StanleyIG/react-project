import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem, selectedItem }) {
  const { userId } = useContext(UserContext);
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(
    () => items.filter((el) => el.userId === userId).sort(sortItems),
    [items, userId]
  );

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  console.log(selectedItem);

  return (
    <>
      {filteredItems.map((el) => {
        if (el.id === selectedItem.id) {
          return (
            <CardButton
              key={el.id}
              onClick={() => setItem(el)}
              className={'focus'}
            >
              <JournalItem title={el.title} post={el.post} date={el.date} />
            </CardButton>
          );
        }
        return (
          <CardButton key={el.id} onClick={() => setItem(el)}>
            <JournalItem title={el.title} post={el.post} date={el.date} />
          </CardButton>
        );
      })}
    </>
  );
}

export default JournalList;
