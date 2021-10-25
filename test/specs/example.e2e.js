const LoginPage = require('../pageobjects/home.page');
const FleetSales = require('../pageobjects/fleetsales.page');
const UsedCars = require('../pageobjects/usedcars.page');
const DiplomatiCars = require('../pageobjects/diplomaticcars.page');
const ChildSeats = require('../pageobjects/childseats.page');
const Exp_VolvoCars = require('../pageobjects/expereincevolvocars.page');
// const { waitforTextChange } = require('../utilities/helpers');
const Support = require('../pageobjects/support.page');
const Service= require('../pageobjects/serviceandrepair.page');
const VolvoExp = require('../pageobjects/volvoexperience.page');

describe('Launch the Volvo Home Page',  () => {

    beforeEach(async () => {
        LoginPage.open();        
    });


    it('Verify the Fleet Sales Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        // await browser.saveFullPageScreen('fullPage', {});
        // expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
        await LoginPage.clickHamburger();
        await LoginPage.clickBuy();
        await LoginPage.clickFleetSales();
        expect(FleetSales.verifyH3TextFleetSales).toHaveTextContaining('Safer and smarter. Better business for you.');
    });

    it('Verify the Used Cars Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickBuy();
        await LoginPage.clickUsedCars();
        await UsedCars.verifyH1TextUsedCars.waitForDisplayed({timeout: 5000});
        expect(UsedCars.verifyH1TextUsedCars).toHaveTextContaining('VOLVO SELEKT');
    });

    it('Verify the Diplomatic sales Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickBuy();
        await LoginPage.clickDiplomaticSales();
        expect(DiplomatiCars.verifyH1TextDiplomaticcars).toHaveTextContaining('VOLVO SELEKT');
    });

    it('Verify the Chlid Seats Error Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickBuy();
        await LoginPage.clickDiplomaticSales();
        expect(ChildSeats.verifyH1TextChildSeats).toHaveTextContaining('Error Occurred');
    });


    it('Verify the Experience Volvo Cars Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickBuy();
        await LoginPage.clickDiplomaticSales();
        expect(Exp_VolvoCars.verifyH2TextExperienceVolvoCars).toHaveTextContaining('Experience Volvo Cars');
    });


    it('Verify the Support Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickOwn();
        await LoginPage.clickSupport();
        await Support.verifyH1TextSupport.waitForDisplayed({timeout: 5000});
        // waitforTextChange(UsedCars.verifyH1TextUsedCars,'VOLVO SELEKT', 5000);
        expect(Support.verifyH1TextSupport).toHaveTextContaining('Volvo Cars Support');
    });

    it('Verify the Service and Repair Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickOwn();
        await LoginPage.clickServiceAndRepair();
        await Service.verifyH1TextServiceandRepair.waitForDisplayed({timeout: 10000});
        // waitforTextChange(UsedCars.verifyH1TextUsedCars,'VOLVO SELEKT', 5000);
        expect(Service.verifyH1TextServiceandRepair).toHaveTextContaining('We take service personally.');
    });

    it('Verify the Volvo Experience Page is launched', async () => {
        LoginPage.clickAccept();
        expect(LoginPage.getHomePageText).toHaveTextContaining('Introducing our new line of pure electric and plug-in hybrid cars.');
        await LoginPage.clickHamburger();
        await LoginPage.clickOwn();
        await LoginPage.clickVolvoExperience();
        await VolvoExp.verifyH2TextVolvoExperience.waitForDisplayed({timeout: 10000});
        expect(VolvoExp.verifyH2TextVolvoExperience).toHaveTextContaining('Volvo experience');
    });

    
});


