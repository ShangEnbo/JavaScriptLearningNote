var status;
var speed = 0;
var car = {
    name:'Fiat',
    model:500,
    weight:'850kg',
    color:'white',
    start:function() {
        status = true;
        speed = 1;
        console.log('start...');
        console.log('speed: ' + speed);
    },
    drive:function() {
        if (speed > 0 && status) {
            ++speed;
            console.log('driving...');
            console.log('speed: ' + speed);
        }
    },
    brake:function() {
        speed = 0;
        console.log('brake...');
        console.log('speed: ' + speed);
    },
    stop:function() {
        if (speed == 0) {
            status = false;
            console.log('stop...');
        }
    }
}