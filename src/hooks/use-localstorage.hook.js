import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setData(() => {
      const res = JSON.parse(localStorage.getItem(key));
      return res
        ? res.map((item) => ({ ...item, date: new Date(item.date) }))
        : [];
    });
  }, [key]);

  const setItem = (item) => {
    if (!item.id) {
      saveData([
        ...data,
        {
          ...item,
          date: new Date(item.date),
          id: data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1
        }
      ]);
    } else {
      saveData([
        ...data.map((i) => {
          if (i.id === item.id) {
            return {
              ...item
            };
          }
          return i;
        })
      ]);
    }
  };

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  const deleteItem = (id) => {
      let newData = [...data.filter(i => i.id !== id)];
      saveData(newData);
    };


  return [data, selectedItem, setItem, setSelectedItem, deleteItem];
}
