import { createServer, Response } from 'miragejs';

export default function () {
  createServer({
    routes() {
      this.post(
        '/api/login',
        (schema, request) => {
          return {
            userData: {
              email: 'admin@phonebook.com',
              name: 'Admin',
            },
            accessToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          };
        },
        {
          timing: 2000,
        },
      );

      this.post(
        '/api/logout',
        (schema, request) => {
          return new Response(200);
        },
        {
          timing: 2000,
        },
      );
      this.post(
        '/api/register',
        (schema, request) => {
          return {
            email: 'admin@phonebook.com',
            name: 'Admin',
            password: '123456',
          };
        },
        {
          timing: 2000,
        },
      );
      this.put(
        '/api/updateUserProfile',
        (schema, request) => {
          return request.requestBody;
        },
        { timing: 3000 },
      );
      this.get(
        '/api/phone',
        (schema, request) => {
          return [
            {
              id: 'a7f3f9d7-91f1-4f44-905e-6a2d03dfd83d',
              firstName: 'John',
              lastName: 'Doe',
              phone: '555-4367-9284',
              email: 'john.doe@example.com',
              address: '123 Main St, Springfield',
              notes: 'Notes for John Doe',
              createdAt: '2021-05-12T00:00:00.000Z',
              lastUpdated: '2023-07-20T00:00:00.000Z',
              favourite: 2,
            },
            {
              id: 'b8e4f2c8-82a2-4d55-916f-7b3d04efc94e',
              firstName: 'Jane',
              lastName: 'Smith',
              phone: '555-1234-5678',
              email: 'jane.smith@example.com',
              address: '456 Elm St, Metropolis',
              notes: 'Notes for Jane Smith',
              createdAt: '2021-06-15T00:00:00.000Z',
              lastUpdated: '2023-08-01T00:00:00.000Z',
              favourite: 1,
            },
            {
              id: 'c9f5g3d9-93b3-5e66-927f-8c4e05gfd95f',
              firstName: 'Alice',
              lastName: 'Johnson',
              phone: '555-9876-5432',
              email: 'alice.johnson@example.com',
              address: '789 Oak St, Gotham',
              notes: 'Notes for Alice Johnson',
              createdAt: '2022-01-10T00:00:00.000Z',
              lastUpdated: '2023-07-30T00:00:00.000Z',
              favourite: 3,
            },
            {
              id: 'd0g6h4e0-04c4-6f77-038g-9d5f16hge06g',
              firstName: 'Robert',
              lastName: 'Brown',
              phone: '555-6543-2198',
              email: 'robert.brown@example.com',
              address: '321 Pine St, Star City',
              notes: 'Notes for Robert Brown',
              createdAt: '2022-03-05T00:00:00.000Z',
              lastUpdated: '2023-07-25T00:00:00.000Z',
              favourite: 2,
            },
            {
              id: 'e1h7i5f1-15d5-7g88-149h-0e6g27ihf17h',
              firstName: 'Emily',
              lastName: 'Davis',
              phone: '555-4321-8765',
              email: 'emily.davis@example.com',
              address: '654 Maple St, Central City',
              notes: 'Notes for Emily Davis',
              createdAt: '2021-11-20T00:00:00.000Z',
              lastUpdated: '2023-07-15T00:00:00.000Z',
              favourite: 1,
            },
            {
              id: 'f2i8j6g2-26e6-8h99-250i-1f7h38jig28i',
              firstName: 'Michael',
              lastName: 'Clark',
              phone: '555-5678-4321',
              email: 'michael.clark@example.com',
              address: '987 Birch St, Coast City',
              notes: 'Notes for Michael Clark',
              createdAt: '2022-04-15T00:00:00.000Z',
              lastUpdated: '2023-08-05T00:00:00.000Z',
              favourite: 3,
            },
            {
              id: 'g3j9k7h3-37f7-9i00-361j-2g8i49kjh39j',
              firstName: 'Sarah',
              lastName: 'Taylor',
              phone: '555-8765-1234',
              email: 'sarah.taylor@example.com',
              address: '123 Cedar St, Keystone City',
              notes: 'Notes for Sarah Taylor',
              createdAt: '2021-07-25T00:00:00.000Z',
              lastUpdated: '2023-07-18T00:00:00.000Z',
              favourite: 1,
            },
            {
              id: 'h4k0l8i4-48g8-0j11-472k-3h9j50lik40k',
              firstName: 'David',
              lastName: 'Martinez',
              phone: '555-2198-6543',
              email: 'david.martinez@example.com',
              address: '456 Walnut St, National City',
              notes: 'Notes for David Martinez',
              createdAt: '2022-02-10T00:00:00.000Z',
              lastUpdated: '2023-07-22T00:00:00.000Z',
              favourite: 2,
            },
            {
              id: 'i5l1m9j5-59h9-1k22-583l-4i0k61mlj51l',
              firstName: 'Laura',
              lastName: 'Hernandez',
              phone: '555-5432-2198',
              email: 'laura.hernandez@example.com',
              address: '789 Spruce St, Hub City',
              notes: 'Notes for Laura Hernandez',
              createdAt: '2022-05-05T00:00:00.000Z',
              lastUpdated: '2023-07-28T00:00:00.000Z',
              favourite: 3,
            },
            {
              id: 'j6m2n0k6-60i0-2l33-694m-5j1l72nmj62m',
              firstName: 'Daniel',
              lastName: 'Lopez',
              phone: '555-8765-4321',
              email: 'daniel.lopez@example.com',
              address: '321 Willow St, Blüdhaven',
              notes: 'Notes for Daniel Lopez',
              createdAt: '2021-08-15T00:00:00.000Z',
              lastUpdated: '2023-07-19T00:00:00.000Z',
              favourite: 1,
            },
            {
              id: 'k7n3o1l7-71j1-3m44-705n-6k2m83onl73n',
              firstName: 'Sophia',
              lastName: 'Garcia',
              phone: '555-4321-2198',
              email: 'sophia.garcia@example.com',
              address: '654 Chestnut St, Ivy Town',
              notes: 'Notes for Sophia Garcia',
              createdAt: '2022-06-20T00:00:00.000Z',
              lastUpdated: '2023-07-24T00:00:00.000Z',
              favourite: 2,
            },
            {
              id: 'l8o4p2m8-82k2-4n55-816o-7l3n94pml84o',
              firstName: 'James',
              lastName: 'Wilson',
              phone: '555-6543-8765',
              email: 'james.wilson@example.com',
              address: '987 Aspen St, Fawcett City',
              notes: 'Notes for James Wilson',
              createdAt: '2022-07-30T00:00:00.000Z',
              lastUpdated: '2023-08-02T00:00:00.000Z',
              favourite: 3,
            },
          ];
        },
        {
          timing: 0,
        },
      );

      this.post('/api/phone', () => new Response(200), { timing: 5000 });
      this.passthrough();
    },
  });
}
