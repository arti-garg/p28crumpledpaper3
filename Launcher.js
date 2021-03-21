class Launcher{

    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.001,
            length:20
        }
        this.pointB= pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher)

    }
    
    display(){
        if (this.launcher.bodyA){
        var pointA= this.launcher.bodyA.position;
        var pointB= this.pointB;
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}

    fly(){

        this.launcher.bodyA= null;
    }

}
