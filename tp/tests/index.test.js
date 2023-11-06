const yams = require("../");
describe("TP Yams", () => {
    describe("Test lancé de de(s)", () => {
        it("#Doit retourner une liste de 5 valeurs", ()=> {
            expect(yams()).toHaveLength(5)
        });
        it('#Doit retourner une liste de 5 nombres', () => {
            const result = yams();
            result.forEach((value) => {
              expect(typeof value).toBe('number');
            });
          });
          
    });
});