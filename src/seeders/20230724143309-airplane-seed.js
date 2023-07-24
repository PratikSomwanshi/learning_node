"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("airplanes", [
            {
                modelNumber: "Rohan",
                capacity: 250,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Murali",
                capacity: 300,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Sita-Ram",
                capacity: 500,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("airplanes", {
            [Op.or]: [{ modelNumber: ["Rohan", "Murali", "Sita-Ram"] }],
        });
    },
};
