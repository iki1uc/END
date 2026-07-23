class END {

    constructor(){
        this.un = null;
        this.mvmr = null;
        this.whirl = null;
        this.octa = null;
        this.real = null;

        this.final = {};
    }

    setInputs(un, mvmr, whirl, octa, real){
        this.un = un;
        this.mvmr = mvmr;
        this.whirl = whirl;
        this.octa = octa;
        this.real = real;
    }

    compute(){

        this.final = {
            UN: this.un,
            MVMR: this.mvmr,
            WHIRL: this.whirl,
            OCTA: this.octa,
            REAL: this.real,
            END: {
                stamp: "END-RESPO",
                time: Date.now(),
                hash: (this.un.unity + this.mvmr.vector + this.whirl.index + this.octa.field + this.real.route) % 999999
            }
        };

        return this.final;
    }
}

window.END = new END();
