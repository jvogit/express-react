import { RegisterInput } from "../resolvers/RegisterInput"

export const validateRequest = (req: RegisterInput) => {
    if (req.username.length < 3) {
        return {
            field: "username",
            message: "Username must be at least 3 characters long"
        };
    }
    if (req.username.length > 255) {
        return {
            field: "username",
            message: "Username must be less than 255 characters long"
        };
    }
    if (!/^[a-zA-Z0-9_]*$/.test(req.username)) {
        return {
            field: "username",
            message: "Username must be alphanumeric"
        };
    }
    if (req.password.length < 6) {
        return {
            field: "password",
            message: "Password must be at least 6 characters long"
        };
    }
    // if email is too long
    if (req.email.length > 320) {
        return {
            field: "email",
            message: "Email must be less than 320 characters long"
        };
    }
    if (!req.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i)) {
        return {
            field: "email",
            message: "Email is not properly formatted"
        };
    }

    return null;
}