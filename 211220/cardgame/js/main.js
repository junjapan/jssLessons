'use strict';
// cardGame.onclick=function(){
const cardGame=()=>{
    //コンストラクタ構文
    function Card(suit,num){
        this.suit=suit;
        this.num=num;
        this.front;
        this.setFront=function(){
            this.front=`${this.suit}${this.num<10?'0':''}${this.num}.gif`;
        }
    }
    //
    const num=document.getElementById("num");

    //カード配列作成
    const cardNum=parseInt(num.value);
    const cards=[];
    cards.splice(0);
    const suits=['s','d','h','c'];
    for(let i=0;i<suits.length;i++){
        for(let j=1;j<=cardNum;j++){
            let card=new Card(suits[i],j);
            card.setFront();
            cards.push(card);
        }
    }
    //シャッフル
    function shuffle(){
        let i=cards.length;
        // 0などがfalseになる値
        while(i){
            let index=Math.floor(Math.random()*i--);
            let temp=cards[index];
            cards[index]=cards[i];
            cards[i]=temp;
        }
    }
    shuffle();
    //テーブル作成
    const table=document.getElementById("table");
    for(let i=0;i<suits.length;i++){
        let tr=document.createElement("tr");
        for(let j=0;j<cardNum;j++){
            let td=document.createElement("td");
            let tempCard=cards[i*cardNum+j];
            // cssのクラスの追加
            td.classList.add("card","back");
            //
            td.onclick=flip;
            td.num=tempCard.num;
            td.style.backgroundImage=`url(images/${tempCard.front})`;
            // td.textContent=`${tempCard.suit}:${tempCard.num}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    //flip
    //nullは参照型の何もないことを表す
    let firstCard=null;
    //数値型の何もないことを表す
    let flipTimerId=NaN;
    function flip(e){
        console.dir(e);
        // let td=this;という書き方もできる
        let td=e.target;
        // td.classList.toggle("back");
        if(!td.classList.contains("back") || flipTimerId){
            return;
        }
        td.classList.remove("back");
        if(firstCard==null){
            firstCard=td;
        }else{
            if(firstCard.num===td.num){
                firstCard.classList.add("banish");
                td.classList.add("banish");
                console.log("banish-1:"+firstCard.classList.contains("banish"));
                console.log("banish-2:"+td.classList.contains("banish"));
                firstCard=null;
            }else{
                flipTimerId=setTimeout(
                    function(){
                        firstCard.classList.add("back");
                        td.classList.add("back");
                        console.log("TimerId:"+flipTimerId);
                        flipTimerId=NaN;
                        firstCard=null;
                    },1200
                );
            }
        }
    }
};
