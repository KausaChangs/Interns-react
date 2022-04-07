import { InternsDto } from "./dto/intern.dto";




export class InternsAPI{
    public static async getAll(): Promise<InternsDto[]>{

        const resp = await fetch("http://localhost:3000/interns", {
            method: "GET"
        })

        const data = await resp.json();

        return data;

    }


}