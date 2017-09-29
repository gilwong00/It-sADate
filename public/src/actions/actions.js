export const ON_SIGNIN = 'on_signIn';
export const ON_SIGNUP = 'on_signUp';

export const SignIn = () => {
    return {
        type: ON_SIGNIN,
        payload: { signIn: true, signUp: false }
    };
}

export const SignUp = () => {
    return {
        type: ON_SIGNUP,
        payload: { signIn: false, signUp: true }
    }
}