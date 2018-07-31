const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://form.k3r.jp/mobilus/contact');


var st_1 = driver.findElement(By.xpath("//input[@value='製品紹介・デモのご依頼']"));
driver.executeScript("arguments[0].click();", st_1 );


driver.findElement(By.id('input2')).sendKeys('テスト会社');
driver.findElement(By.id('input3')).sendKeys('テスト部門');
driver.findElement(By.id('input4')).sendKeys('テスト役名');
driver.findElement(By.name('f_item_name_last')).sendKeys('テスト姓');
driver.findElement(By.name('f_item_name_first')).sendKeys('テスト名');
driver.findElement(By.id('input6')).sendKeys('123456');
driver.findElement(By.id('input7')).sendKeys('123@jps');
driver.findElement(By.name('f_item_mail_chk')).sendKeys('123@jps');
driver.findElement(By.id('k3_to_check_input')).click();
//問い合わせ内容のタイトルに必須填寫の表示が出てきます。
//driver.quit();
