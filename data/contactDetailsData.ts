import { faker } from "@faker-js/faker";

export interface CustomerData {
  firstname: string;
  lastname: string;
  dateofBirth: string;
  email: string;
  phone: string;
  streetAdres1: string;
  streetAdres2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export const happyPathCustomerData: CustomerData = {
  firstname: "jerome",
  lastname: "fendergast",
  dateofBirth: "2000/04/25",
  email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
  phone: faker.string.numeric(8),
  streetAdres1: faker.location.streetAddress(),
  streetAdres2: faker.location.secondaryAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  postcode: faker.string.numeric(4),
  country: faker.location.country(),
};

export const InvalidEmailCustomerData: CustomerData = {
    firstname: "jerome",
    lastname: "fendergast",
    dateofBirth: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}zmail`,
    phone: faker.string.numeric(8),
    streetAdres1: faker.location.streetAddress(),
    streetAdres2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };

  export const InvalidbirthDateCustomerData: CustomerData = {
    firstname: "jerome",
    lastname: "fendergast",
    dateofBirth: "wwwwwwfffffff",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: faker.string.numeric(8),
    streetAdres1: faker.location.streetAddress(),
    streetAdres2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };

  export const InvalidpostalCodeCustomerData: CustomerData = {
    firstname: "jerome",
    lastname: "fendergast",
    dateofBirth: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: faker.string.numeric(8),
    streetAdres1: faker.location.streetAddress(),
    streetAdres2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: "Texas",
    country: faker.location.country(),
  };

  export const InvalidPhoneCustomerData: CustomerData = {
    firstname: "jerome",
    lastname: "fendergast",
    dateofBirth: "2000/04/25",
    email: `jodi-${faker.string.alphanumeric(4)}@zmail.com`,
    phone: "fake",
    streetAdres1: faker.location.streetAddress(),
    streetAdres2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postcode: faker.string.numeric(4),
    country: faker.location.country(),
  };
  


