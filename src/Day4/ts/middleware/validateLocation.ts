import { Request, Response, NextFunction } from 'express';
import axios from 'axios'


class validateLocationClass {

    validateLocation = async (req: Request, res: Response, next: NextFunction) => {
        const location = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        try {

            const response = await axios.get(`http://ip-api.com/json/${location}`);
            if (response.data.country != 'India') {
                res.status(400).send('Unauthorized Location');
                return;
            }
            req.headers.locationdata = response.data;
            next();

        } catch (err) {
            res.json({
                error: err
            })
        }

    }
}

const validateLocationObject = new validateLocationClass();
export { validateLocationObject };