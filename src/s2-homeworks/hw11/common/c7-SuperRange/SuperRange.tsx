import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{ color: 'rgba(0, 204, 34, 1)', minWidth: '100%' }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
