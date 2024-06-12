import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
  name: string,
  setError: (error: string | null) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
    setName('')
  } else {
    addUserCallback(name)
    setName(name)
  }

}

export const pureOnBlur = (name: string, setError: (error: string | null) => void) => { // если имя пустое - показать ошибку
  name === '' ?  setError('Ошибка! Введите имя!'): setError(null)
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string | null>(null) // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(e.currentTarget.value) // need to fix
    setError(null)
  }

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
    setName('')
  }

  const onBlur = () => pureOnBlur(name, setError)

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => pureOnEnter(e, addUser)

  const totalUsers = users.length // need to fix


  const getlastUserName = () => {
    if (users.length > 0) {
      const lastName = users[users.length - 1].name
     return lastName !== undefined ? lastName : ''
    }
    return ''
  }

  const lastUserName = getlastUserName()
  console.log(users)
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
