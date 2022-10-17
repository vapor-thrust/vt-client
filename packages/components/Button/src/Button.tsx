import React from 'react'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material'

const button = ({children, ...props}: ButtonProps) => {
    return (<Button {...props}>{children}</Button>)
}

export default button