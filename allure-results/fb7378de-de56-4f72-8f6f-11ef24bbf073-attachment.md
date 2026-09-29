# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locator.spec.js >> practice
- Location: tests\locator.spec.js:21:10

# Error details

```
ReferenceError: shw is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - link "logo" [ref=e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=e9]
    - navigation [ref=e14]:
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e19]:
          - link "Input Form" [ref=e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e21]:
          - link "Date Pickers" [ref=e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e23]:
          - link "Table" [ref=e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=e25]:
          - link "Progress Bars" [ref=e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=e27]:
          - link "Alerts and Modals" [ref=e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e29]:
          - link "List Box" [ref=e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=e31]:
          - link "Others" [ref=e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=e35]:
    - generic [ref=e38]:
      - generic [ref=e39]: Menu
      - list [ref=e40]:
        - listitem [ref=e41]:
          - link "Simple Form Demo" [ref=e42] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e43]:
          - link "Checkbox Demo" [ref=e44] [cursor=pointer]:
            - /url: check-box-demo.php
        - listitem [ref=e45]:
          - link "Radio Buttons Demo" [ref=e46] [cursor=pointer]:
            - /url: radio-button-demo.php
        - listitem [ref=e47]:
          - link "Select Input" [ref=e48] [cursor=pointer]:
            - /url: select-input.php
        - listitem [ref=e49]:
          - link "Form Submit" [ref=e50] [cursor=pointer]:
            - /url: form-submit.php
        - listitem [ref=e51]:
          - link "Ajax Form Submit" [ref=e52] [cursor=pointer]:
            - /url: ajax-form-submit.php
        - listitem [ref=e53]:
          - link "Jquery Select2" [ref=e54] [cursor=pointer]:
            - /url: jquery-select.php
    - generic [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]: Single Input Field
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]: Enter Message
            - textbox "Message" [active] [ref=e63]: hello
          - button "Show Message" [ref=e64] [cursor=pointer]
          - generic [ref=e65]: "Your Message :"
      - generic [ref=e67]:
        - generic [ref=e68]: Two Input Fields
        - generic [ref=e70]:
          - generic [ref=e71]:
            - generic [ref=e72]: Enter value A
            - textbox "Enter Value" [ref=e73]
          - generic [ref=e74]:
            - generic [ref=e75]: Enter value B
            - textbox "Enter Value" [ref=e76]
          - button "Get Total" [ref=e77] [cursor=pointer]
          - generic [ref=e78]: "Total A + B :"
  - contentinfo [ref=e79]:
    - paragraph [ref=e82]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import {test,expect, chromium} from '@playwright/test'
  2  | test('Browser Context Playwright Test',async({page})=>{
  3  |  await page.goto('https://selenium.qabible.in/simple-form-demo.php')
  4  |  const messagebox=page.locator('#single-input-field')
  5  |  const button=page.locator('#button-one')
  6  |  await messagebox.fill("hello")
  7  |  await button.click()
  8  | 
  9  |     })
  10 | 
  11 |     test('special locators in playwright',async({page})=>{
  12 |     await page.goto('https://groceryapp.uniqassosiates.com/admin')
  13 |     const username=page.locator("//input[@name='username']")
  14 |     await username.fill("admin")
  15 |      const password=page.locator("//input[@name='username']")
  16 |      await password.fill("admin")
  17 |      const submit=page.locator("//button[@type='submit']")
  18 |    await submit.click()
  19 |     })
  20 | 
  21 |     test.only('practice',async({page})=>{
  22 |     await page.goto('https://selenium.qabible.in/simple-form-demo.php')
  23 |     //text() 
  24 |     /*
  25 |     const username=page.locator("//input[@id='single-input-field']")
  26 |     await username.fill("admin")
  27 |     const submit=page.locator("//button[text()='Show Message']")
  28 |    await submit.click()*/
  29 | 
  30 |    //contains
  31 |    /*
  32 |    const username=page.locator("//input[contains(@id,'single-input-field')]")
  33 |     await username.fill("admin")
  34 |     const submit=page.locator("//button[text()='Show Message']")
  35 |    await submit.click()*/
  36 | 
  37 |    //indexing
  38 |    /*const username=page.locator("(//input[contains(@class,'form-control')])[1]")
  39 |     await username.fill("admin")
  40 |     const submit=page.locator("//button[text()='Show Message']")
  41 |    await submit.click()*/
  42 | /*const username=page.getByRole('textbox',{name:'Message'})
  43 | await username.fill("hello")
  44 | const shw=page.getByRole('button',{name:'Show Message'})
  45 | await shw.click()*/
  46 | const username=page.getByRole('textbox',{name:'Message'})
  47 | await username.fill("hello")
  48 | const show=page.getByText('Show Message')
> 49 | await shw.click()
     |  ^ ReferenceError: shw is not defined
  50 |     })
```