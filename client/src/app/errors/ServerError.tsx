

import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface LocationState {
  error: {
    detail: string,
    status: number,
    title: string
  }
}

export default function ServerError() {
  const history = useHistory()
  const {state} = useLocation<LocationState>()

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant='h3' color='error' gutterBottom>{state?.error.title}</Typography>
          <Divider />
          <Typography>{state?.error.detail || 'Internal server error'}</Typography>
        </>
        ) : (
          <Typography variant='h5' gutterBottom>Server Error</Typography>
        )
      }
      {/* 
        Could've used <Link /> component here instead 
        This shows use of history.push to do what Link usually used for
      */}
      <Button onClick={() => history.push('/catalog')}>Go back to store</Button>
    </Container>
  )
}
