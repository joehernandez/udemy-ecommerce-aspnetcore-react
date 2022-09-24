import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  isDarkMode: boolean;
  handleOnChange: () => void;
}

export default function Header({isDarkMode, handleOnChange}: Props) {
  return (
    <AppBar position='static' sx={{mb: 4}}>
      <Toolbar>
        <Typography variant='h6'>
          RE-STORE
        </Typography>
        <Switch checked={isDarkMode} onChange={handleOnChange} />
      </Toolbar>
    </AppBar>
  )
}