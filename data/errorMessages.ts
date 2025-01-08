
export interface errorMessages {
    invalidEmail: string 
    invalidDOB: string
    invalidPostal: string
    invalidPhone: string
}

export const ERROR_MESSAGES : errorMessages = {
    invalidEmail : "Validation failed: email: Email is invalid",
    invalidDOB : "Validation failed: birthdate: Birthdate is invalid",
    invalidPostal : "Validation failed: postalCode: Postal code is invalid",
    invalidPhone : "Validation failed: phone: Phone number is invalid"
}