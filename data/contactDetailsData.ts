import { faker } from "@faker-js/faker";

export interface CustomerData {
  firstName: string;
  lastName: string;
  birthdate?: string;
  email?: string;
  phone?: string;
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
}

export const existingCustomerData: CustomerData = {
  firstName: "jerome",
  lastName: "fendergast",
}

export const happyPathCustomerData: CustomerData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthdate: "2000/04/25",
  email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
  phone: faker.string.numeric(8),
  street1: faker.location.streetAddress(),
  street2: faker.location.secondaryAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  postcode: faker.string.numeric(4),
  country: faker.location.country(),
};

export const InvalidEmailCustomerData: CustomerData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthdate: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}zmail`,
    phone: faker.string.numeric(8),
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };

  export const InvalidbirthDateCustomerData: CustomerData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthdate: "wwwwwwfffffff",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: faker.string.numeric(8),
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };

  export const InvalidpostalCodeCustomerData: CustomerData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthdate: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: faker.string.numeric(8),
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: "Texas",
    country: faker.location.country(),
  };

  export const InvalidPhoneCustomerData: CustomerData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthdate: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: "fake",
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };
  


