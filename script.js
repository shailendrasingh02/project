<
        const cal=() => {
            let Comp = document.getElementById("Comp").value;
            let maths = document.getElementById("maths").value;
            let chem = document.getElementById("chem").value;
            let phy = document.getElementById("phy").value;
            let totalgrades = parseFloat(Comp) + parseFloat(maths) + parseFloat(chem) + parseFloat(phy);
            let grades="";
            
            let parc = (totalgrades/400)*100
            
            if(parc <=100 && parc>=80){
                grades="A";
            }
            else if(parc <=79.99 && parc>=60){
                grades="B";
            }
            else if(parc <=59.99 && parc>=40){
                grades="C";
            }
            else {
                grades="F";
            }
            if (parc>=39.99)
            {
                document.getElementById("showdata").innerHTML=` out of 400 total marks is ${totalgrades} amd Parcentenage is ${parc}%.<br> your grades is ${grades} and You are PASS`
            }
            else{
                document.getElementById("showdata").innerHTML=` out of 400 total marks is ${totalgrades} amd Parcentenage is ${parc}%.<br> your grades is ${grades} and You are FAIL`
            }
           
        }