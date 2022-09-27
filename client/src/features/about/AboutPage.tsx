import { Alert, AlertTitle, Button, ButtonGroup, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import agent from '../../app/api/agent'

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const onGetValidationError = () => {
    agent.TestErrors.getValidationError()
      .then(() => console.log('should not see this'))
      .catch(error => setValidationErrors(error))
  }

  const onGetBadRequest = () => agent.TestErrors.get400Error().catch(error => console.log(error))
  const onGetUnauthorized = () => agent.TestErrors.get401Error().catch(error => console.log(error))
  const onGetNotFound = () => agent.TestErrors.get404Error().catch(error => console.log(error))
  const onGetServerError = () => agent.TestErrors.get500Error().catch(error => console.log(error))

  return (
    // <Typography variant='h2'>About Page</Typography>
    <Container>
      <Typography gutterBottom variant='h2'>Errors for testing purposes</Typography>
      <ButtonGroup fullWidth>
        <Button variant='contained' onClick={onGetBadRequest}>Test 400 Error</Button>
        <Button variant='contained' onClick={onGetUnauthorized}>Test 401 Error</Button>
        <Button variant='contained' onClick={onGetNotFound}>Test 404 Error</Button>
        <Button variant='contained' onClick={onGetServerError}>Test 500 Error</Button>
        <Button variant='contained' onClick={onGetValidationError}>Test Validation Error</Button>
      </ButtonGroup>
      {validationErrors.length > 0 &&
        <Alert severity='error'>
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map(error => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      }
    </Container>
  )
}
