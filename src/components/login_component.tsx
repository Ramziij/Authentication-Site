import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler, useFormState, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css" 



interface IFormInput {
  login: String;
  password: String;
}

const Login: React.FunctionComponent = () => {
  const { handleSubmit, control} = useForm<IFormInput>();
  const { errors } = useFormState({
    control
  });
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="Formik">
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
        control={control}
        name="login"
        rules={{required: 'Обязателно'}} 
        render={({field}) => (
            <TextField 
            label="Login" 
            size="small" 
            margin="normal" 
            fullWidth={ false } 
            onChange={(e) => field.onChange(e)}
            value={ field.value }
            placeholder="Login or Email" 
            error={!!errors.login?.message}
            helperText={errors.login?.message}/>
        )
    }
    />
        <Controller
        control={ control }
        name="password"
        rules={{required: 'Обязательно'}}
        render={({field}) => (
        <TextField 
        label="Password" 
        size="small" 
        margin="normal" 
        fullWidth={ false } 
        value= { field.value }
        type="password" 
        placeholder="Password"
        error={!!errors.password?.message}
        helperText={errors.password?.message}/>
        )
    }
    />
        <Button type="submit" variant="contained">Push</Button>

    </form>
    </div>
  );
}


export default Login