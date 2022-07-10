export const loginValidation = {
    required: 'required',
    validate: (value: string) => {

        if (value.match(/[а-яА-Я]/)) {
            return 'Login can contain only the Latin alphabet'
        }
        if (value.length < 3) {
            return 'Login must be longer than 3 symbols'
        }

        return true
    }
}

export const passwordValidation ={
    required: 'required',
    validate: (value: string) => {
        if (value.length < 6) {
            return 'The password must be longer than 6 symbols'
        } 
        
        return true
    }
}

export const emailValidation ={
    required: 'required',
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)){
            return 'Email can contain only the Latin alphabet'
        }
        if (value.length < 4) {
            return 'Email must be longer than 4 symbols'
        }
    }
}