import React from 'react'
import SortSelect from './UI/select/SortSelect'
import MyInput from './UI/input/MyInput'

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className='filter'>
      <MyInput
        placeholder='Search...'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <SortSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Sorting'
        options={[
          { value: 'title', name: 'By title' },
          { value: 'category', name: 'By category' },
        ]}
      />
    </div>
  )
}
