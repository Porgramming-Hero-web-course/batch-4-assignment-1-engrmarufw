{
    type shapes = { shape: "circle", radius: number } | { shape: "rectangle", width: number, height: number, };
    const calculateShapeArea = (object: shapes): number | undefined => {
        if (object.shape == "circle") {
            return Number((Math.PI * object.radius * object.radius).toFixed(2));
        }
        else if (object.shape == "rectangle") {
            return Number((object.width * object.height).toFixed(2));
        }
    }


    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)

    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
    console.log(rectangleArea)
}