const page = require('./page');
// var h3= h3[text()="Electrifying your fleet"];
class HomePage extends page {

    get acceptCookies() { return $("//button[text()='Accept']")}
    get getHomePageText() { return $("//p//span[text()='Introducing our new line of pure electric and plug-in hybrid cars.']")}
    get hamburger() {return $("//div//span[@data-testid='burger']")}
    get buy() {return $("//button//em[text()='Buy']")}
    get own() {return $("//button//em[text()='Own']")}
    get aboutVolvo() {return $("//button//em[text()='About Volvo']")}
    get explore() {return $("//button//em[text()='Explore']")}
    get more() {return $("//button//em[text()='More']")}
    get fleetSales() {return $("//a//em[text()='Fleet sales']")}
    get usedCars() {return $("//a//em[text()='Used cars']")}
    get diplomaticSales() {return $("//a//em[text()='Diplomatic sales']")}
    get childSeats() {return $("//a//em[text()='Child seats']")}
    get experienceVolvoCars() {return $("//a//em[text()='Experience Volvo Cars']")}
    get support() {return $("//a//em[text()='Support']")} 
    get serviceAndRepair() {return $("//a//em[text()='Service & Repair']")}
    get accessories() {return $("//a//em[text()='Accessories']")}
    get volvoRecall() {return $("//a//em[text()='Volvo Recall']")}
    get volvoExperience() {return $("//a//em[text()='Volvo experience']")}
    get volvoCarsApp() {return $("//a//em[text()='Volvo Cars App']")}
    get euemissonTest() {return $("//a//em[text()='EU emission tests']")}
    get ourStory() {return $("//a//em[text()='Our story']")}
    get sustainability() {return $("//a//em[text()='Sustainability']")}
    get safety() {return $("//a//em[text()='Safety']")}
    get ournews() {return $("//a//em[text()='Our news']")}
    get careers() {return $("//a//em[text()='Careers']")}
    get investors() {return $("//a//em[text()='Investors']")}
    get awards() {return $("//a//em[text()='Awards']")}
    get recharge() {return $("//a//em[text()='Recharge']")}
    get concepts() {return $("//a//em[text()='Concepts']")}
    get electricCars() {return $("//a//em[text()='Electric cars']")}
    get armouredCars() {return $("//a//em[text()='Armoured cars']")}
    get company() {return $("//a//em[text()='Company']")}
    get contactus() {return $("//a//em[text()='Contact Us']")}
    get mediaPress() {return $("//a//em[text()='Media/Press']")}
    get lifeStyleCollection() {return $("//a//em[text()='Lifestyle Collection']")}
    get investorRelations() {return $("//a//em[text()='Investor Relations']")}
    get militarySales() {return $("//a//em[text()='Military Sales']")}
    get facebook() {return $("//a[@href='https://www.facebook.com/Volvo']")}
    get instagram() {return $("//a//em[text()='http://instagram.com/volvocars")}
    get twitter() {return $("//a//em[text()='http://twitter.com/volvocars")} 
    get youtube() {return $("//a//em[text()='https://www.youtube.com/user/VolvoCarsNews")}
    get lifeStyleCollection() {return $("//a//em[text()='Lifestyle Collection']")}

    // get h3Text(text) { 
    //     let temp =h3.replace('Electrifying your fleet',text);
    //     console.log("temp is "+ temp);
    //     return $(temp);
    // }
    // get h2Text(text) { return $(`//h1[text()="${text}"]`)}
    // get h3Text(text) { return $(`//h3[text()="${text}"]`)}

    async clickAccept() {
        // const isTrue =  this.acceptCookies.isEnabled();
         if (this.acceptCookies.isEnabled()) await this.acceptCookies.click();
    }
    async clickHamburger() {
            await this.hamburger.click();
    }

    async clickBuy() {
        await this.buy.click();
    }
    async clickOwn() {
        await this.own.click();
    }
    async clickAboutVolvo() {
        await this.aboutVolvo.click();
    }
    async clickExplore() {
        await this.explore.click();
    }
    async clickExplore() {
        await this.explore.click();
    }
    async clickMore() {
        await this.more.click();
    }
    async clickFleetSales() {
        await this.fleetSales.click();
    }
    async clickUsedCars() {
        await this.usedCars.click();
    }
    async clickDiplomaticSales() {
        await this.diplomaticSales.click();
    }
    async clickChildSeats() {
        await this.childSeats.click();
    }
    async clickExperienceVolvo() {
        await this.experienceVolvoCars.click();
    }
    async clickSupport() {
        await this.support.click();
    }
    async clickServiceAndRepair() {
        await this.serviceAndRepair.click();
    }
    async clickAccessories() {
        await this.accessories.click();
    }
    async clickVolvoRecall() {
        await this.volvoRecall.click();
    }
    async clickVolvoExperience() {
        await this.volvoExperience.click();
    }
    async clickVolvoCarsApp() {
        await this.volvoCarsApp.click();
    }
    async clickEuEmissonTest() {
        await this.euemissonTest.click();
    }
    async clickOurStory() {
        await this.ourStory.click();
    }
    async clickSustainability() {
        await this.sustainability.click();
    }
    async clickSafety() {
        await this.safety.click();
    }
    async clickOurNews() {
        await this.ournews.click();
    }
    async clickCareers() {
        await this.careers.click();
    }
    async clickInvestors() {
        await this.investors.click();
    }
    async clickAwards() {
        await this.awards.click();
    }
    async clickRecharge() {
        await this.recharge.click();
    }
    async clickConcepts() {
        await this.concepts.click();
    }
    async clickOurStory() {
        await this.ourStory.click();
    }
    async clickElectricCars() {
        await this.electricCars.click();
    }
    async clickArmouredCars() {
        await this.armouredCars.click();
    }
    async clickCompany() {
        await this.company.click();
    }
    async clickContactUs() {
        await this.contactus.click();
    }
    async clickMediaPress() {
        await this.mediaPress.click();
    }
    async clickLifeStyleCollection() {
        await this.lifeStyleCollection.click();
    }
    async clickInvestorRelations() {
        await this.investorRelations.click();
    }
    async clickMilitarySales() {
        await this.militarySales.click();
    }
    async clickMediaPress() {
        await this.mediaPress.click();
    }
    async clickMediaPress() {
        await this.mediaPress.click();
    }
    async clickMediaPress() {
        await this.mediaPress.click();
    }
    open() {
        super.open();
    }
}

module.exports= new HomePage();