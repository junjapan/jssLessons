window.onload=function(){
    const path="images/";
    const images=["cat1.jpg","cat2.jpg","cat3.jpg",];
    var index=0;
    const ele=document.getElementById("mainImage");
    ele.addEventListener(
        "click",
        // OK
        (e)=>{
            console.dir(this);
            e.target.src=path+images[++index % images.length];
        }
        // NG windowオブジェクトを指すのでNG
        // ()=>{
        //     console.dir(this);
        //     this.src=path+images[++index % images.length];
        // }
        // OK
        // function(){
        //     this.src=path+images[++index % images.length];
        // }
    );
    // setInterval(function(){
    //     ele.src=path+images[++index % images.length];
    // },1000);
}