import React from 'react';
import SortSelect from './UI/select/SortSelect';
import MyInput from './UI/input/MyInput';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className='filter'>
      <MyInput
        placeholder='Поиск...'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <SortSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='По умолчанию'
        options={[
          { value: 'title', name: 'По алфавиту' },
          { value: 'date', name: 'По дате' },
          { value: 'likes', name: 'По лайкам' },
        ]}
      />
    </div>
  );
}
