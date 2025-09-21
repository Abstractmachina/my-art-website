import { ArtSiteSetting } from "./payload-types";

export type Logos = Extract<NonNullable<ArtSiteSetting["logos"]>, object>;

export type About = Extract<NonNullable<ArtSiteSetting["aboutMe"]>, object>;
