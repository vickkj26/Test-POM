import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { WelcomePage } from '../pages/WelcomePage'
import { Dashboard } from '../pages/Dashboard'

test.describe('Validating Lead creation',()=>
{

test("Basic LoginPage", async ({ page }) => {
    const obj1 = new LoginPage(page)
    await obj1.loadUrl()
    await obj1.credentials()
    await obj1.loginSubmit()

    const obj = new WelcomePage(page)
    await obj.CRMSFA()

    const obj2=new Dashboard(page)

    await obj2.createLead()
    console.log("Sample Msg")

})


test.afterAll("Final Status",async()=>
{

    console.log("Successfull url got loaded")
    console.log("Credenatial got passed")


})
})