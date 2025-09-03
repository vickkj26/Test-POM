import { WelcomePage } from "./WelcomePage";
import { expect, Expect } from "@playwright/test";



export class Dashboard extends WelcomePage {


    async createLead() {

        expect(this.lp.locator("//a[text()='Create Lead']")).toContainText("Create Lead")

        console.log("Asseration works")
        await this.lp.click("//a[text()='Create Lead']")

    }


}

