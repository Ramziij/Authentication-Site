import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler, useFormState, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { loginValidation, passwordValidation } from "../services/validation";




interface IFormInput {
  login: string;
  password: string;
}

const Login: React.FunctionComponent = () => {
  const { control, handleSubmit} = useForm<IFormInput>();
  const { errors } = useFormState({
    control
  });
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="all_form">
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{'& > :not(style)': { m: 1, width: '300px'},}}>
        <Controller 
        control={control}
        name="login"
        rules={loginValidation} 
        render={({field}) => (
            <TextField 
            label="Login" 
            onChange={(e) => field.onChange(e)} 
            value={ field.value }
            size="small" 
            margin="normal" 
            fullWidth={ false }
            placeholder="Login or Email" 
            error={!!errors.login?.message}
            helperText={errors.login?.message}/>
        )
    }
    />
        <Controller
        control={ control }
        name="password"
        rules={passwordValidation}
        render={({field}) => (
          <TextField 
          label="Password"
          onChange={(e) => field.onChange(e)}  
          value= { field.value } 
          size="small" 
          margin="normal" 
          fullWidth={ false }
          type="password" 
          placeholder="Password"
          error={!!errors.password?.message}
          helperText={errors.password?.message}/>
        )
    }
    />
        <Button type="submit" variant="contained">Push</Button>
        </Box>
    </form>
    </div>
  );
}


export default Login