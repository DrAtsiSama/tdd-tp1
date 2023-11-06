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
        it("#Doit retourner une liste de valeurs triées dans l'ordre croissant", () => {
            const result = yams();
            const isSorted = (list) => {
                for (let i = 1; i < list.length; i++) {
                  if (list[i] < list[i - 1]) {
                    return false;
                  }
                }
                return true;
              };
            expect(isSorted(result)).toBeTruthy()
        });
        it("#Doit retourner faux à une liste de valeurs non-triées dans l'ordre croissant", () => {
            const result = [1,2,5,3,2];
            const isSorted = (list) => {
                for (let i = 1; i < list.length; i++) {
                  if (list[i] < list[i - 1]) {
                    return false;
                  }
                }
                return true;
              };
            expect(isSorted(result)).toBeFalsy()
        });   
    });
});