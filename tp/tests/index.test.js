const yams = require("../");
describe("TP Yams", () => {
  describe("Test lancé de de(s)", () => {
    it("#Doit retourner une liste de 5 valeurs", () => {
      expect(yams.diceGameAnalyser()).toHaveLength(5)
    });
    it('#Doit retourner une liste de 5 nombres', () => {
      const result = yams.diceGameAnalyser();
      result.forEach((value) => {
        expect(typeof value).toBe('number');
      });
    });
    it("#Doit retourner une liste de valeurs triées dans l'ordre croissant", () => {
      const result = yams.diceGameAnalyser();
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
      const result = [1, 2, 5, 3, 2];
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
  describe("Test du calcul de points", () => {
    it("#Doit retourner le nombre de valeurs identiques", () => {
      const game = yams.yamsGame();
      const result = yams.findIdenticalValue(game);
      expect(result).not.toBe(null);
    });
    it("#Doit retourner 0", () => {
      const game = [1, 2, 3, 4, 5];
      const result = yams.findIdenticalValue(game);
      expect(result).toBe(0);
    });
    it("#Doit retourner 2", () => {
      const game = [1, 2, 1, 4, 5];
      const result = yams.findIdenticalValue(game);
      expect(result).toBe(2);
    });
    it("#Doit retourner 4", () => {
      const game = [1, 2, 1, 4, 2];
      const result = yams.findIdenticalValue(game);
      expect(result).toBe(4);
    });
    it("#Doit retourner 5", () => {
      const game = [1, 2, 1, 2, 2];
      const result = yams.findIdenticalValue(game);
      expect(result).toBe(5);
    });
  });
});