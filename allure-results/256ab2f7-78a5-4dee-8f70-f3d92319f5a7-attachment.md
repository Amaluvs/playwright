# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locator.spec.js >> practice
- Location: tests\locator.spec.js:20:10

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//input(contains[@id,'input-field'])' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:5935:25)
    at InjectedScript._queryEngineAll (<anonymous>:6645:49)
    at InjectedScript.querySelectorAll (<anonymous>:6632:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:35)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//input(contains[@id,\'input-field\'])')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - textbox "Message" [ref=e63]
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