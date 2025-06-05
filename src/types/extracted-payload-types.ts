import { Graphic } from "./payload-types";

export type Logos = Extract<NonNullable<Graphic["logos"]>, object>;