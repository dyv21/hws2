import React, {MouseEventHandler, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  // const [timerId, setTimerId] = useState<number | undefined>(undefined)
  const [timerId, setTimerId] = useState<any>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)
  const [isStartBtnDisabled, setStartBtnDisabled] = useState<boolean>(false)
  const [isStopBtnDisabled, setStoptBtnDisabled] = useState<boolean>(true)



  const start = (e:any) => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    setTimerId(setInterval(()=>setDate(new Date(restoreState('hw9-date', Date.now()))), 1000))
    setStartBtnDisabled(true)
    setStoptBtnDisabled(false)
  }

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    setDate(new Date(restoreState('hw9-date', Date.now())))
    setStartBtnDisabled(false)
    setStoptBtnDisabled(true)
    clearInterval(timerId)
  }

  const onMouseEnter = () => setShow(true)
  const onMouseLeave = () => setShow(false)

  let dayFormater = new Intl.DateTimeFormat("en-US", {
    weekday: "long"
  });

  let monthFormater = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });

  let timeFormat = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  let dateFormater = new Intl.DateTimeFormat("ru", {});

  const stringDay = dayFormater.format(date) || <br/> // пишут студенты
  const stringMonth = monthFormater.format(date) || <br/> // пишут студенты
  const stringTime = timeFormat.format(date) || <br/>
  const stringDate = dateFormater.format(date) || <br/>

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}> <strong>{stringTime}</strong></span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth}</span>,{' '}
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br/>
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={isStartBtnDisabled} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={isStopBtnDisabled} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
