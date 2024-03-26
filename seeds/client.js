const { Client } = require('../models');

const clientData = [
    {
        name: "John Doe",
        phoneNumber: "123-456-7890",
        repairOrderNumber: "O123456",
        carModel: "Toyota Camry",
        serviceRequested: "Oil Change",
        waitingForService: false,
        user_id: 3
    },
    {
        name: "Alice Smith",
        phoneNumber: "987-654-3210",
        repairOrderNumber: "O654321",
        carModel: "Honda Accord",
        serviceRequested: "Tire Rotation",
        waitingForService: true,
        user_id: 5
    },
    {
        name: "Bob Johnson",
        phoneNumber: "555-555-5555",
        repairOrderNumber: "O555555",
        carModel: "Ford Mustang",
        serviceRequested: "Brake Inspection",
        waitingForService: false,
        user_id: 2
    },
    {
        name: "Emily Wilson",
        phoneNumber: "444-333-2222",
        repairOrderNumber: "O987654",
        carModel: "Chevrolet Silverado",
        serviceRequested: "Battery Replacement",
        waitingForService: true,
        user_id: 4
    },
    {
        name: "Michael Brown",
        phoneNumber: "777-888-9999",
        repairOrderNumber: "O777888",
        carModel: "BMW X5",
        serviceRequested: "Wheel Alignment",
        waitingForService: false,
        user_id: 1
    },
    {
        name: "Sophia Johnson",
        phoneNumber: "111-222-3333",
        repairOrderNumber: "RO111222",
        carModel: "Tesla Model 3",
        serviceRequested: "Electrical Diagnostic",
        waitingForService: true,
        user_id: 3
    },
    {
        name: "Emma Davis",
        phoneNumber: "555-123-4567",
        repairOrderNumber: "RO543210",
        carModel: "Subaru Outback",
        serviceRequested: "Transmission Flush",
        waitingForService: false,
        user_id: 2
    },
    {
        name: "Oliver Johnson",
        phoneNumber: "999-888-7777",
        repairOrderNumber: "RO999888",
        carModel: "Ford F-150",
        serviceRequested: "Brake Pad Replacement",
        waitingForService: true,
        user_id: 5
    },
    {
        name: "Ava Martinez",
        phoneNumber: "333-222-1111",
        repairOrderNumber: "RO333222",
        carModel: "Honda Civic",
        serviceRequested: "AC Repair",
        waitingForService: false,
        user_id: 4
    },
    {
        name: "William Smith",
        phoneNumber: "777-666-5555",
        repairOrderNumber: "RO777666",
        carModel: "Toyota Prius",
        serviceRequested: "Oil Leak Inspection",
        waitingForService: true,
        user_id: 5
    }
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;
