import { serve } from '@hono/node-server'
import { Hono } from 'hono'
 import "dotenv/config"
 import { cors } from 'hono/cors'

import { usersRouter } from './users/user.router'
import { vehicleSpecificationsRouter } from './VehicleSpecifications/VehicleSpecifications.router' 
import { VehiclesRouter } from './vehicles/vihicle.router'  
import{ LocationsRouter} from './Locations/Locations.router'
import {BookingsRouter} from './Bookings/Bookings.router'
import { PaymentsRouter} from './Payments/Payments.router' 
import { CustomerSupportTicketsRouter} from './CustomerSupportTickets/CustomerSupportTickets.router'
import { FleetManagementRouter} from './FleetManagement/FleetManagement.router'
import { authRouter} from './Authentication/Authenitication.router'  
 

const app =new Hono()
app.use('/*', cors())
app.route("/", usersRouter)
app.route("/",vehicleSpecificationsRouter)
app.route("/",VehiclesRouter)
app.route("/",LocationsRouter)
app.route("/",BookingsRouter)
app.route("/",PaymentsRouter)
app.route("/", CustomerSupportTicketsRouter)
app.route("/",FleetManagementRouter)
app.route("/",authRouter)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
console.log(`Server is running on port ${process.env.PORT}`)
