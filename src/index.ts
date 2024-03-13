import {createGrace} from '@grace-js/grace';
import {join} from 'path';

// Create a GraceJS application
const app = createGrace();

app.registerError(async (_, error) => {
    console.error(error);
});

// Assuming `app` is your Grace instance
app.registerRoutes(join(import.meta.dirname, 'routes'));

// Listen on port 3000
app.listen(3000);

console.log('Server running on http://localhost:3000');
