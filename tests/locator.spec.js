import {test,expect, chromium} from '@playwright/test'
test('Browser Context Playwright Test',async({page})=>{
 await page.goto('https://selenium.qabible.in/simple-form-demo.php')
 const messagebox=page.locator('#single-input-field')
 const button=page.locator('#button-one')
 await messagebox.fill("hello")
 await button.click()

    })

    test('special locators in playwright',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin')
    const username=page.locator("//input[@name='username']")
    await username.fill("admin")
     const password=page.locator("//input[@name='username']")
     await password.fill("admin")
     const submit=page.locator("//button[@type='submit']")
   await submit.click()
    })

    test.only('practice',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    //text() 
    /*
    const username=page.locator("//input[@id='single-input-field']")
    await username.fill("admin")
    const submit=page.locator("//button[text()='Show Message']")
   await submit.click()*/

   //contains
   /*
   const username=page.locator("//input[contains(@id,'single-input-field')]")
    await username.fill("admin")
    const submit=page.locator("//button[text()='Show Message']")
   await submit.click()*/

   //indexing
   /*const username=page.locator("(//input[contains(@class,'form-control')])[1]")
    await username.fill("admin")
    const submit=page.locator("//button[text()='Show Message']")
   await submit.click()*/
/*const username=page.getByRole('textbox',{name:'Message'})
await username.fill("hello")
const shw=page.getByRole('button',{name:'Show Message'})
await shw.click()*/

/*const username=page.getByRole('textbox',{name:'Message'})
await username.fill("hello")
const show=page.getByText('Show Message')
await show.click()*/

const username=page.getByLabel('textbox',{name:'Message'})
await username.fill("hello")
const show=page.getByText('Show Message')
await show.click()

    })