require('chromedriver')

const { Builder, Capabilities, By } = require('selenium-webdriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   await (await driver).get('http://localhost:3000')
})

afterAll(async () => {
   await (await driver).quit()
})

test('title shows up when page loads', async () => {
    const title = await driver.findElement(By.xpath('//h1[text()= "Duel Duo"]'))
    expect(title.isDisplayed()).toBeTruthy()

})

test('test shows up draw button exist', async () => {
    const drawlbtn =  await driver.findElement(By.id('choices'))
    expect(drawlbtn.isDisplayed()).toBeTruthy()
  
})


test('test shows up add duo button exist', async () => {
    const addbtn =  await driver.findElement(By.id('player-duo'))
    expect(addbtn.isDisplayed()).toBeTruthy()
  
await driver.sleep(3000)
})
