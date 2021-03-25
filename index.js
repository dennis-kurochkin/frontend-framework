import { init } from "./framework";
import { User } from "./src/User";

init('#app', User({
    firstName: 'Dennis',
    lastName: 'Kurochkin',
}));
