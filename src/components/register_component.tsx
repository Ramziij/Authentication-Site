import React, { FC } from 'react';
import { useFormState, useForm, SubmitHandler, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { loginValidation, passwordValidation, emailValidation } from "../services/validation";
import Avatar from '@mui/material/Avatar';

interface IFormInput {
    login: string;
    password: string;
    email: string;
}

const Register: FC = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const { errors } = useFormState({
        control
    });
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx = {{
                    display: 'flex',
                    border: '1px solid gray', 
                    alignContent: 'center', 
                    marginLeft: 'auto', 
                    alignItems: 'center', 
                    width: '300px', 
                    height: '300px', 
                    marginRight: 'auto',
                    marginTop: '20px', 
                    padding: '40px 40px',
                    flexDirection: 'column'
                }}>
                    <Avatar sx={{width: 56, height: 56, margin: 1}}/>
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
                        fullWidth={ true }
                        placeholder="Login" 
                        error={!!errors.login?.message}
                        helperText={errors.login?.message}/>
                )
            }
            />

                    <Controller 
                        control={control}
                        name="email"
                        rules={emailValidation} 
                        render={({field}) => (
                    <TextField 
                        label="Email" 
                        onChange={(e) => field.onChange(e)} 
                        value={ field.value }
                        size="small" 
                        margin="normal" 
                        fullWidth={ true }
                        placeholder="Email" 
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}/>
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
                        fullWidth={ true }
                        type="password" 
                        placeholder="Password"
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}/>
                )
            }
            />
        
                    <Button  sx={{
                        width:"300px", 
                        display: 'flex',
                        margin: '5px'}} 
                        size="medium" 
                        type="submit" 
                        variant="contained">Submit</Button>
                </Box>
            </form>
        </div>
    )
}

export default Register