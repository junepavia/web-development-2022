import axios from "axios";
import Reminder from "../model/reminder";

class ReminderServices{
    http = axios.create({
        baseURL : 'https://jsonplaceholder.typicode.com/'
    });

    async getReminders(){
        const response =await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    async addReminders(title:string,id:number){
        const response =await this.http.post<Reminder>('/todos',{ title,id });
        console.log(response);
        return response.data;
    }
    async deleteReminders(id:number){
        const response =await this.http.delete<Reminder>('/todos'+ id);
        return response.data;
    }
}

export default new ReminderServices();
