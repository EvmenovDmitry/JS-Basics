CL = console.log;

let kwt_cost = 0.209;

let Water_tap = {

    locked: false,
    opened: false,
    speed: 50,
    water_t: 5,

    pour(target, ml) {
        if (target.hasOwnProperty('add_water')) {

            if (!target.full()) {

                target.add_water(ml);

            };

        } else {
            return false;
        }
    }
};

let Kettle = {

    capacity_ml: 1700,
    water_ml: 0,
    water_t: void 0,

    power_watt: 2100,

    full() {
        if (this.water_ml < this.capacity_ml) {
            return false;
        } else {
            return true;
        }
    },

    add_water(ml, t) {
        if (!this.full()) {

            if (t) this.water_t = t;

            if (this.water_ml + ml >= this.capacity_ml) {
                this.water_ml = this.capacity_ml;
            } else {
                this.water_ml += ml;
            }

        };
    },

    to_empty() {
        this.water_ml = 0;
        this.water_t = void 0;
    },

};

CL(Kettle);
CL(Water_tap);