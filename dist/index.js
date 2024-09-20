"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const cors_1 = require("hono/cors");
const user_router_1 = require("./users/user.router");
const VehicleSpecifications_router_1 = require("./VehicleSpecifications/VehicleSpecifications.router");
const vihicle_router_1 = require("./vehicles/vihicle.router");
const Locations_router_1 = require("./Locations/Locations.router");
const Bookings_router_1 = require("./Bookings/Bookings.router");
const Payments_router_1 = require("./Payments/Payments.router");
const CustomerSupportTickets_router_1 = require("./CustomerSupportTickets/CustomerSupportTickets.router");
const FleetManagement_router_1 = require("./FleetManagement/FleetManagement.router");
const Authenitication_router_1 = require("./Authentication/Authenitication.router");
const app = new hono_1.Hono();
app.use('/*', (0, cors_1.cors)());
// Assign unique base paths to each router
app.route('/users', user_router_1.usersRouter);
app.route('/vehicalspecification', VehicleSpecifications_router_1.vehicleSpecificationsRouter);
app.route('/vehicles', vihicle_router_1.VehiclesRouter);
app.route('/locations', Locations_router_1.LocationsRouter);
app.route('/bookings', Bookings_router_1.BookingsRouter);
app.route('/payments', Payments_router_1.PaymentsRouter);
app.route('/support-tickets', CustomerSupportTickets_router_1.CustomerSupportTicketsRouter);
app.route('/fleet-management', FleetManagement_router_1.FleetManagementRouter);
app.route('/auth', Authenitication_router_1.authRouter);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
