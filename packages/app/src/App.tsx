import React from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const theme = createTheme()

function App() {
  // const ref = useRef()
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    console.log(data.get('a'))

    fetch('0.0.0.0/oper', {
      method: 'POST',
      body: JSON.stringify({
        a: data.get('a'),
        b: data.get('b'),
      }),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box component="form" marginTop="20px" onSubmit={submit}>
          <TextField id="a" name="a" label="a값" required></TextField>
          <TextField id="b" name="b" label="b값" required></TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            get
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
