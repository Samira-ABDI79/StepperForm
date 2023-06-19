import { useState, FormEvent, ChangeEvent } from "react";
import { TextField, Button } from "@material-ui/core";

function RegistrationForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default RegistrationForm;
