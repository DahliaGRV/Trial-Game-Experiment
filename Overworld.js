class Overworld {
constructor (config){
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
}

init(){
    const image = new Image();
    image.onload = ()=> {
        this.ctx.drawImage(image,0,0)
    };
    image.src ="/images/maps/Mushroom_Shop_Draft.png"

    const x=5;
    const y=5;

    const shadow = new Image();
    shadow.onload = () => {
        this.ctx.drawImage(shadow,
            0, //left cut
            0, //top cut
            32, //wdith of cut
            32, //width of cut
            x * 16,
            y * 16,
            16,
            16
            )
       
    }
    shadow.src = "/images/characters/sprite_shadow.png"

    const person = new Image();
    person.onload = () =>{
        this.ctx.drawImage(person,
             0, //left cut
             0, //top cut
             32, //wdith of cut
             32, //width of cut
             x * 16,
             y * 16,
             16,
             16
             )
    }
    person.src="/images/characters/elven_ginger.png"


}
}