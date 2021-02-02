class Box {

    constructor(x,y,width,height){
    
        var options ={
            isStatic: false,
            restitution : 0.08,
            density : 0.0001, 
            friction : 0.1
            
        }
    
    
        this.width = width
        this.height = height
    
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body)
        
    }
    
    display(){ 
        var pos = this.body.position
        push()
       translate(pos.x,pos.y)
       rotate(this.body.angle)
     
        rectMode(CENTER)
        rect(0,0,this.width, this.height)
        pop()
    
    }
    
    }