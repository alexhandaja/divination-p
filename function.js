$(function() {

    function startLove() {
        var crushNo = new PronounValue ();

        var flower = new flower (crushNo.pronoun());

        RemoveIntro();

        FlowerView(flower, crushNo);
    };

// to click the submit button! 
    $("#start").click(function(event) {
        event.preventDefault();
        startLove();
	});

 
});

function TheFlower (flowerData, crushNo) 
{
    var  loveOrNot$ = $("#loveOrNot");

    this.paper = Raphael (flower,365,653);

    for(var i = 0; i < flowerData.petals(); i++){


        var radius = 73;
        var centerX = 170;
        var centerY = 165;

        var xPosition = radius * Math.cos(2 * Math.PI * i / flowerData.petals()) + centerX;
        var yPosition = radius * Math.sin(2 * Math.PI * i / flowerData.petals()) + centerY;

        var ellipseHeight = 60;
        var petalEllipse = this.paper.ellipse(xPosition, yPosition, 35, ellipseHeight);


        if(xPosition !== centerX){

            var triangle = new TrianglePointsToDegrees(xPosition, yPosition, centerX, centerY, xPosition, yPosition + ellipseHeight)
        
            if(xPosition > centerX){
                angle = triangle.cDegree();
            }
            else{
                angle = -triangle.cDegree();
            }
        }

        //rotate ellipse around center
        if(angle){
            petalEllipse.transform("r" + angle);
        }

        // Sets the fill attribute of the circle to red (#f00)
        petalEllipse.attr("fill", "#fff");
        petalEllipse.node.setAttribute("class","petals");
        
        // Sets the stroke attribute of the circle to white
        petalEllipse.attr("stroke", "#000");
        petalEllipse.attr("stroke-opacity", 0.1);

        petalEllipse.click( function(){ 
            flowerData.removePetal();
            this.remove();

            //show love message
            loveOrNot$.html(flowerData.result());

            if(flowerData.petals() == 0)
            {
                GameOver(flowerData, crushNo);
            }
        });
    }
    var flowerCenter = paper.circle(centerX, centerY, 35);

    // Sets the fill attribute of the center circle 
    flowerCenter.attr("fill", "#EBEB65");

    // Sets the stroke attribute of the circle to white
    flowerCenter.attr("stroke", "#fff");
    

};

function GameOver(flowerDate,crushNo) {
    var endStatus = "I knew " + pronoun + "would love you <3";

    if(!flowerData.love())
    {
        endStatus = "Well.. ";
    }
    $("#loveNote").append("<h1>" + endStatus + "</H1>");
}

function PlayerSelectedValues() {
    var sex = $('input[name=pronoun]:radio:checked').val();


    var name$ = $('#name');


    this.pronoun = function()
    {
        return pronoun;
    };
}

