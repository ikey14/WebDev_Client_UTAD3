function CalcTriangleArea() 
{
    let base = document.querySelector("#base").value  
    let height = document.querySelector("#height").value
    console.log(base)
    console.log(height)
    let area = (base * height) / 2;

    document.querySelector("#result").innerHTML = "Triangle's Area:" + area.toFixed(2);
}