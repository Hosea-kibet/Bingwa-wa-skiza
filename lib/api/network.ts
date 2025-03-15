import { apiRequest } from "./http";

export async function checkNetwork(){
    return apiRequest<{ error?: string }>("/api/check-network");
}