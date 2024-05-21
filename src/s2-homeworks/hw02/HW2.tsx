import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*



* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'all' | 'high' | 'low' | 'middle'// need to fix any
export type AffairType = {
  _id: number // need to fix any
  name: string // need to fix any
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType
export type AffairsList = Array<AffairType>

// constants
const defaultAffairs: AffairsList = [ // need to fix any
  {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},

]

// pure helper functions
export const filterAffairs = (affairs: AffairsList, filter: string): AffairsList => (
  filter === 'all' ? affairs : (affairs.filter(affair => affair.priority === filter)))


export const deleteAffair = (affairs: AffairsList, _id: number): AffairsList => (
  affairs.filter(affair => affair._id !== _id))

function HW2() {

  const [affairs, setAffairs] = useState<AffairsList>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)

  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
