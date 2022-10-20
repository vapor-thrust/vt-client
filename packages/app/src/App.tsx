import React, { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const theme = createTheme()

function App() {
  const [result, setResult] = useState('')
  const [address, setAddress] = useState('http://localhost:8000/oper')

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const body = JSON.stringify({ a: data.get('a'), b: data.get('b') })

    fetch(address, {
      method: 'POST',
      body,
    })
      .then((response) => response.json())
      .catch(() => {
        return { res: 'wtf' }
      })
      .then((json) => setResult(JSON.stringify(json)))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box component="form" marginTop="20px" onSubmit={submit}>
          <TextField id="a" name="a" label="a값" required></TextField>
          <TextField id="b" name="b" label="b값" required></TextField>

          <TextField
            id="address"
            name="b"
            label="서버 주소"
            required
            fullWidth
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            get
          </Button>
        </Box>
        <TextField fullWidth disabled value={result}></TextField>
      </Container>
    </ThemeProvider>
  )
}

export default App
