import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{


async CRMSFA()
{


   await this.lp.click("//div[@id='label']")

    console.log("CRM/SFA Button got clicked")
}




}