import { h1 } from "../framework/createElement";

export const User = ({ firstName, lastName }) => h1`Hello, user ${firstName} ${lastName}!`;
