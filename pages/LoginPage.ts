import { Page } from 'playwright'

export class LoginPage {

    lp: Page

    constructor(lp: Page) {

        this.lp = lp


    }

    async loadUrl() {

        await this.lp.goto("http://leaftaps.com/opentaps/control/main")
    }

    async credentials() {

       await  this.lp.fill("//input[@id='username']", "DemoSalesManager")
        await this.lp.fill("//input[@id='password']", "crmsfa")

    }

    async loginSubmit() {

        await this.lp.click("//input[@value='Login']")
    }


}







