import {createRoute} from '@grace-js/grace';
import {z} from "zod";

export default createRoute({
    schema: {
        response: {
            200: z.object({
                message: z.string()
            })
        },
        query: z.object({
            name: z.string()
        })
    },
    handler: async ({query}) => {
        return {
            code: 200,
            body: {
                message: `Hello, ${query.name}!`
            }
        };
    },
});
