import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import "dotenv/config";
import { cors } from 'hono/cors';

import { usersRouter } from './users/user.router';
import { vehicleSpecificationsRouter } from './VehicleSpecifications/VehicleSpecifications.router'; 
import { VehiclesRouter } from './vehicles/vihicle.router';  
import { LocationsRouter } from './Locations/Locations.router';
import { BookingsRouter } from './Bookings/Bookings.router';
import { PaymentsRouter } from './Payments/Payments.router'; 
import { CustomerSupportTicketsRouter } from './CustomerSupportTickets/CustomerSupportTickets.router';
import { FleetManagementRouter } from './FleetManagement/FleetManagement.router';
import { authRouter } from './Authentication/Authenitication.router';

const app = new Hono();
app.use('/*', cors());

// Register each router to its specific path
app.route("/users", usersRouter);
app.route("/vehiclespecifications", vehicleSpecificationsRouter);
app.route("/vehicles", VehiclesRouter);
app.route("/locations", LocationsRouter);
app.route("/bookings", BookingsRouter);
app.route("/payments", PaymentsRouter);
app.route("/customersupport", CustomerSupportTicketsRouter);
app.route("/fleetmanagement", FleetManagementRouter);
app.route("/auth", authRouter);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
