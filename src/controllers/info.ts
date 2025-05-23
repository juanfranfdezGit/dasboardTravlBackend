import { Router } from 'express';

const infoRouter = Router();

infoRouter.get('/', (_req, res) => {
    res.json({
        hotelName: "Hotel Miranda",
        availableEndpoints: 
        [
            { path: "/api/rooms", methods: ["GET"] },
            { path: "/api/bookings", methods: ["GET"] },
            { path: "/api/employees", methods: ["GET"] },
            { path: "/api/guests", methods: ["GET", "POST"] }
        ]
    });
});

export default infoRouter;