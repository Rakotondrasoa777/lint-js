class Wallet {
    constructor(couleur, isLost, taille) {
        this.couleur = couleur;
        this.isLost = isLost;
        this.taille = taille;
    }

    addVola(){};
    getVola(){};
    open(){};
    close(){};
    checkVola(){};
}

const wallet = new Wallet("noir", false, 12);
wallet.addVola();
