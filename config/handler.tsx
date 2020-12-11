import development from "./development.json";
import production from "./production.json";

const config = process.env.NODE_ENV === "production" ? production : development;
export default config;
