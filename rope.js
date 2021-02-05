class Rope{
    constructor(body1,body2,offSetx,offSety){
        this.offSetx=offSetx
        this.offSety=offSety
    var options={
        bodyA:body1,bodyB:body2,pointB:{x:this.offSetx,y:this.offSety}
        
    }
   
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    
    display(){
        
        
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position

        
    
        
            strokeWeight(2)
            var anker1x=pointA.x
            var anker1y=pointA.y
            var anker2x=pointB.x+this.offSetx
            var anker2y=pointB.y+this.offSety
            line(anker1x,anker1y,anker2x,anker2y)
            
        }
        
        
        
    }
