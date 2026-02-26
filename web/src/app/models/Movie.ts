import { StremingChannel } from "./StreamingChannel";

export interface Movie {
 id: number;
 title: string;
 description: string;
 streaming_channel: StremingChannel
}   
