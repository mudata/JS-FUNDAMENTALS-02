class Vehicle{
        constructor(type, model, parts, fuel){
            this.type=type;
            this.model=model;
            let engine=parts.engine;
            let power=parts.power;
            this.parts={
                    engine:parts.engine,
                    power:parts.power,
                    quality:engine*power,
            };
            this.fuel=fuel;

        }
            drive(fuel) {
                return this.fuel-=fuel;
            }
    }
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);