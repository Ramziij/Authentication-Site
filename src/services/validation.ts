export const loginValidation = {
    required: 'required',
    validate: (value: string) => {

        if (value.match(/[а-яА-Я]/)) {
            return 'Login can contain only the Latin alphabet'
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