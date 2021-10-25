class Serviceandrepair{

    get verifyH1TextServiceandRepair() { return $("//h1[text()='We take service personally.']")}
    
}

module.exports = new Serviceandrepair();