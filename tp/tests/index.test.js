const yams = require("../");
describe("TP Yams", () => {
    describe("Test lancé de de(s)", () => {
        it("#Doit retourner une liste de 5 valeurs", ()=> {
            expect(yams()).toHaveLength(5)
        });
    });
});